new Vue({
    el: '#vue-app',
    data: {
        name: 'Bugra',
        job: 'VueSite',
        age: 25,
        website: 'https://www.google.com',
        websiteTag: '<a href="https://www.google.com" target="_blank">Google 2</a>',
        mouseX: 0,
        mouseY: 0,
        game: 'Age of Empires II: DE',
        gameHours: 200,
        a: 0,
        b: 0,
        active: false,
        passive: false,
        error: false,
        success: false,
    },
    methods: {
        toggleAll: function(params) {
            let closed = 0;
            let open = 0;
            let display = 'none';
            let divs = document.getElementsByClassName('parts');
            
            for(i = 0; i < divs.length; i++) {
                divs[i].style.display === 'none' ? closed++ : open++;
            }
            
            if(closed > open) {
                display = 'initial';
            }

            for(i = 0; i < divs.length; i++) {
                divs[i].style.display = display;
            }
            
        },
        toggle: function(id) {
            let display = document.querySelector(id).style.display;
            console.log(display);
            if(display === "none") {
                document.querySelector(id).style.display = "initial";
            } else {
                document.querySelector(id).style.display = "none";
            }
        },
        greet: function(time) {
            let n = this.name;
            return 'Selam ' + time + ' ' + n;
        },
        older: function() {
            this.age++;
        },
        olderX: function(dif) {
            this.age += dif;
        },
        younger: function() {
            this.age == 0 ? alert("You became newborn! Can't go back more.") : this.age--;
        },
        youngerX: function(dif) {
            this.age < dif ? (this.age = 0) : (this.age -= dif);
        },
        // For more event modifiers: https://vuejs.org/v2/guide/events.html
        goBFcom: function() {
            alert("Site is not ready. You can't go now!");
        },
        // Takes event automatically, no need to pass param in html code
        updateCanvasXY: function(event) {
            this.mouseX = event.offsetX;
            this.mouseY = event.offsetY;
        },
        // Keyboard events: https://vuejs.org/v2/guide/events.html
        logName: function() {
            console.log("You entered your name");
        },
        logAge: function() {
            console.log("You entered your age");
        },
        aPlusAgeMethod: function() {
            // Even if only value of b changes, this function will also computed again.
            console.log("aPlusAgeMethod works!");
            return this.a + this.age;
        },
        bPlusAgeMethod: function() {
            // Even if only value of a changes, this function will also computed again.
            console.log("bPlusAgeMethod works!");
            return this.b + this.age;
        },
        activate: function() {
            this.active = true;
            this.passive = false;
        },
        deactivate: function() {
            this.active = false;
            this.passive = true;
        },

    },
    computed: {
        aPlusAge: function() {
            // This function will only computed when a changes or in the beginning.
            console.log("aPlusAge works!");
            return this.a + this.age;
        },
        bPlusAge: function() {
            // This function will only computed when b changes or in the beginning.
            console.log("bPlusAge works!");
            return this.b + this.age;
        },
        compClasses: function() {
            return {
                box: true,
                active: this.active,
                passive: this.passive,
            };
        }
    },
});
