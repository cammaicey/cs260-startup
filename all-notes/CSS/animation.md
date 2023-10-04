# Animation

- `animation` properties and defining `keyframes` for what the element should look like at different times in the animation
    - text zoom out until it is 20% of view height
    ```
    p {
        text-align: center;
        font-size: 20vh;
    }
    ```
    - properly animate
    ```
    p {
        text-align: center;
        font-size: 20vh;

        animation-name: demo;
        animation-duration: 3s;
    }
    ```
    - adding the `animation-name` property with a value of demo
        - refers to the name of the `keyframes` that we will specify in a minute
    - add an animation-duration property in order to specify that the animation should last for three seconds
    - now to make keyframes
    ```
    @keyframes demo {
        from {
            font-size: 0vh;
        }

        to {
            font-size: 20vh;
        }
    }
    ```
    - one more addition
        - make the frame bounce a little bigger than the final size
    ```
    @keyframes demo {
        from {
            font-size: 0vh;
        }

        95% {
            font-size: 21vh;
        }

        to {
            font-size: 20vh;
        }
    }
    ```