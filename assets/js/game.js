const btnLanchGame = document.querySelector("#btnLanchGame");
btnLanchGame.addEventListener("click", () => {
  document.getElementById("lanchGame").style.display = "none";
  document.getElementById("game").style.display = "flex";

  const world = document.querySelector("#gameCanvas");
  const c = world.getContext("2d");
  world.width = world.clientWidth;
  world.height = world.clientHeight;

  let frames = 0;
  const keys = {
    ArrowLeft: { pessed: false },
    ArrowRight: { pressed: false },
    fired: { pressed: false },
  };

  class Player {
    constructor() {
      this.velocity = {
        x: 0, // Vitesse de déplacement sur l'axe des X
        y: 0, // Vitesse de déplacement sur l'axe des Y
      };
      const image = new Image();
      image.src = "/assets/img/space.png";
      image.onload = () => {
        this.image = image;
        this.width = 48; // Largeur du vaisseau
        this.height = 48; // Hauteur du vaisseau
        this.position = {
          x: world.width / 2 - this.width / 2, // Position sur l'axe des x
          y: world.height - this.height - 10, // Position sur l'axe des Y
        };
      };
    }

    draw() {
      c.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }

    shoot() {
      missiles.push(
        new Missile({
          position: {
            x: this.position.x + this.width / 2,
            y: this.position.y,
          },
        })
      );
    }

    update() {
      if (this.image) {
        if (keys.ArrowLeft.pressed && this.position.x >= 0) {
          this.velocity.x = -5;
        } else if (
          keys.ArrowRight.pressed &&
          this.position.x <= world.width - this.width
        ) {
          this.velocity.x = 5;
        } else {
          this.velocity.x = 0;
        }
        this.position.x += this.velocity.x;
        this.draw();
      }
    }
  }
  class Alien {
    constructor({ position }) {
      this.velocity = { x: 0, y: 0 };
      const image = new Image();
      image.src = "/assets/img/ghost.png";
      image.onload = () => {
        this.image = image;
        this.width = 32;
        this.height = 32;
        this.position = {
          x: position.x,
          y: position.y,
        };
      };
    }
    draw() {
      if (this.image) {
        c.drawImage(
          this.image,
          this.position.x,
          this.position.y,
          this.width,
          this.height
        );
      }
    }

    update({ velocity }) {
      if (this.image) {
        this.position.x += velocity.x;
        this.position.y += velocity.y;
        if (this.position.y + this.height >= world.height) {
          //   console.log('You loose');
          youLose();
        }
      }
      this.draw();
    }
    shoot(alienMissiles) {
      if (this.position) {
        alienMissiles.push(
          new alienMissile({
            position: {
              x: this.position.x,
              y: this.position.y,
            },
            velocity: {
              x: 0,
              y: 3,
            },
          })
        );
      }
    }
  }

  class Missile {
    constructor({ position }) {
      this.position = position;
      this.velocity = { x: 0, y: -5 };
      this.width = 3;
      this.height = 10;
    }
    draw() {
      c.save();
      c.fillStyle = "red";
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
      c.fill();
      c.restore();
    }
    update() {
      this.position.y += this.velocity.y;
      this.draw();
    }
  }
  class Grid {
    constructor() {
      this.position = { x: 0, y: 0 };
      this.velocity = { x: 1, y: 0 };
      this.invaders = [];
      let rows = Math.floor((world.height / 34) * (1 / 5));
      const colums = Math.floor((world.width / 34) * (2 / 5));
      this.height = rows * 34;
      this.width = colums * 34;
      for (let x = 0; x < colums; x++) {
        for (let y = 0; y < rows; y++) {
          this.invaders.push(
            new Alien({
              position: {
                x: x * 34,
                y: y * 34,
              },
            })
          );
        }
      }
    }
    update() {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.velocity.y = 0;
      if (this.position.x + this.width >= world.width || this.position.x == 0) {
        this.velocity.x = -this.velocity.x;
        this.velocity.y = 34;
      }
    }
  }
  class Particule {
    constructor({ position, velocity, radius, color }) {
      this.position = position;
      this.velocity = velocity;
      this.radius = radius;
      this.color = color;
      this.opacity = 1;
    }
    draw() {
      c.save();
      c.globalAlpha = this.opacity;
      c.beginPath();
      c.fillStyle = this.color;
      c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      c.fill();
      c.closePath();
      c.restore();
    }
    update() {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.opacity > 0) {
        this.opacity -= 0.01;
      }
      this.draw();
    }
  }

  class alienMissile {
    constructor({ position, velocity }) {
      this.position = position;
      this.velocity = velocity;
      this.width = 3;
      this.height = 10;
    }
    draw() {
      // c.beginPath();
      c.save();
      c.fillStyle = "yellow";
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
      c.fill();
      c.restore();
    }
    update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }

  let missiles;
  let alienMissiles;
  let grids;
  let player;
  let particules;
  let lifes;

  const init = () => {
    missiles = [];
    alienMissiles = [];
    grids = [new Grid()];
    player = new Player();
    particules = [];
    lifes = 5;
    keys.ArrowLeft.pressed = false;
    keys.ArrowRight.pressed = false;
    keys.fired.pressed = false;
  };

  init();

  const animationLoop = () => {
    c.clearRect(0, 0, world.width, world.height);
    player.update();
    requestAnimationFrame(animationLoop);

    missiles.forEach((missile, index) => {
      if (missile.position.y + missile.height <= 0) {
        setTimeout(() => {
          missiles.splice(index, 1);
        }, 0);
      } else {
        missile.update();
      }
    });
    grids.forEach((grid, indexGrid) => {
      grid.update();

      if (frames % 50 === 0 && grid.invaders.length > 0) {
        grid.invaders[Math.floor(Math.random() * grid.invaders.length)].shoot(
          alienMissiles
        );
      }
      grid.invaders.forEach((invader, indexI) => {
        invader.update({ velocity: grid.velocity });
        missiles.forEach((missile, indexM) => {
          if (
            missile.position.y <= invader.position.y + invader.height &&
            missile.position.y >= invader.position.y &&
            missile.position.x + missile.width >= invader.position.x &&
            missile.position.x - missile.width <=
              invader.position.x + invader.width
          ) {
            for (let i = 0; i < 12; i++) {
              particules.push(
                new Particule({
                  position: {
                    x: invader.position.x + invader.width / 2,
                    y: invader.position.y + invader.height / 2,
                  },
                  velocity: {
                    x: (Math.random() - 0.5) * 2,
                    y: (Math.random() - 0.5) * 2,
                  },
                  radius: Math.random() * 5 + 1,
                  color: "red",
                })
              );
            }
            setTimeout(() => {
              grid.invaders.splice(indexI, 1);

              missiles.splice(indexM, 1);
              if (grid.invaders.length === 0 && grids.length == 1) {
                grids.splice(indexGrid, 1);
                youWin();
                //     grids.push(new Grid());
              }
            }, 0);
          }
        });
      });
    });
    alienMissiles.forEach((alienMissile, index) => {
      if (alienMissile.position.y + alienMissile.height >= world.height) {
        setTimeout(() => {
          alienMissiles.splice(index, 1);
        }, 0);
      } else {
        alienMissile.update();
      }
      //    console.log(player.position.x);
      if (
        alienMissile.position.y + alienMissile.height >= player.position.y &&
        alienMissile.position.y <= player.position.y + player.height &&
        alienMissile.position.x >= player.position.x &&
        alienMissile.position.x + alienMissile.width <=
          player.position.x + player.width
      ) {
        alienMissiles.splice(index, 1);

        for (let i = 0; i < 22; i++) {
          particules.push(
            new Particule({
              position: {
                x: player.position.x + player.width / 2,
                y: player.position.y + player.height / 2,
              },
              velocity: {
                x: (Math.random() - 0.5) * 2,
                y: (Math.random() - 0.5) * 2,
              },
              radius: Math.random() * 5,
              color: "white",
            })
          );
        }
        lostLife();
      }
    });

    particules.forEach((particule, index) => {
      if (particule.opacity <= 0) {
        particules.splice(index, 1);
      } else {
        particule.update();
      }
    });

    frames++;
  };

  animationLoop();

  youLose = () => {
    window.location.href = "staff.html";
  };

  addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        keys.ArrowLeft.pressed = true;
        break;
      case "ArrowRight":
        keys.ArrowRight.pressed = true;
        break;
    }
  });

  addEventListener("keyup", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        keys.ArrowLeft.pressed = false;
        break;
      case "ArrowRight":
        keys.ArrowRight.pressed = false;
        break;
      case " ":
        player.shoot();
        break;
    }
  });

  youLose = () => {
    window.location.href = "sign-up.html";
  };

  youWin = () => {
    console.log("you win");
    document.getElementById("idpopin").style.display = "flex";
  };
});
