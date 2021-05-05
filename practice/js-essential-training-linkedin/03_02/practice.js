const backpack = {
    name: "Decathlon",
    color: "camo",
    strapLength: {
        left: 26,
        right: 26
    },
    lidOpen: true,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function(lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    }

}

// Methods are properties containing functions.

