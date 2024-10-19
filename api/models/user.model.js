import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAACUCAMAAAAXgxO4AAAAM1BMVEXk5ueutLe1u77q7Ozn6eqrsbTg4uPX2tvHy83U19nd3+HM0NKnrrHCx8myuLvR1Na8wcOVzPP6AAAEUElEQVR4nO2c2Y7dIAxAA5glkAD//7Ulmen0rnNZHEyqnJeRqj4cIWMMse80XVxcXFxcvAYS1A6FJF+rg0sES+2SC0xKu8iWhJRy+8Oi02oafO2FCiuXkt0hF8nNPLK6mBxnD9bf7pJxM2zEC/fa+sc9iCHVtV/ea+8sXlNLPgFq/WW1/626UWMtOmie4b2pRzuSOTif553M/TyQucvV3tXdMObm0668ZxnEHAq9N3Nq5w0oipMvRogWCMXaG5raHHSVt/SKWHyK5YGym3PaJQdT5502qKE0B1uaUG6gPELB13vLSOhdkQlvoMuJird4y0iVWRoXnMmZSFxVpsIfqFLi3JBSdhaatwtoXfAU5YLEvNU7mVNoQ2iNlCQeCKJcNOXCb0hipX3BGSMoEmFuD/FE/5uzMBjesn+NiBLiTK79dyeOeP96xTZUtDfw3lU5zDjivvetGQKOePfrPjgcb9k7H9bfkh/EQ1/vS/wS///FT5tV6h5pn+mex896cp62VpkmFHGC6vC09bhYUcT734Bw7pye4n3ipLf8876rnPYlC+PtcKHQPvFr7VnfxycVG8Wpvkic9hvQab+6tV6DCHs/zvplue1bPmnLCuR0G75kMTQ5/C8qs9/wEep+lVTd1i24JO+brHun6P4q8cq8IieO0AVXs0Fp25puWAs7PUfxnqaiaBnIe9uh+d3MNLeeNwid2YctOXmP5z1gs7boMlrH/jb/E+SnPSrZkEM1IMzjBNADbtSBGqHMmzkgts0BTbRl1a+ACqt/Wncp/RqGC+4HYLKzifJr1G0fdmPRzHbE2H6J0sFsBE3eKF4C3EOt85ndUlllrdZ6TqQ/2lql1DSsPwgBVju3rjFy7/22Jfdd6rnnMa7GzTr9p7Hsk7RKOzL57rZP85zf/8Y5j84OIw9bCmQfjp7bhB6NJQ+bbc7X+KXwjSKVBmuwdNPAADaYpznfbPfoNIk6gF7fne957tJHp3oH/Pvp5CJ35lfVs4ABtS44XR8pZnivceBUjKBp7yx87lCAgdBr9rRsJlLGcPQ+TUGCrb2rs3jsVbTgNl9MPO6eAfbj5H0DcjkoXkA1fqv6rH5IvGRP3reYM/xHrt9/VwJPPeKGC7R//s41R+0uA3t8mPyYS7zZd5iPyN3v1bF+iEWELuF9Y76iBLqo/DzVZI6w5q2dBlUs7ckFAoE3gnntZ8xmGjspwRJ5N7ZSguqaBx9o+Rba67x8TfUZijVOUInklQ+9oEm967v7BK12YqkKFlHdQ4NIhTd5oOzUZPPWbkgUyqtzsiPznlQoFi/4CJGytUAVLrg+8CGiBBnLYqXbHfMjS9kppAZZ8NIyUdAe9veUiMNA3iWdfmMcPn8p2J44U1VYFMwKAcocGxYFv6WJNPKIRP4lDmvIFIn8Y5/45vNI/ixFfTf7MfDceqX5F8ewya1t7WDi2UeQjXwofPagE4ixoO5uubi4uBiYPzDvQoOe0yNPAAAAAElFTkSuQmCC"
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;