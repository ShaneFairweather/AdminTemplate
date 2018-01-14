import You from '../assets/images/avatars/user-19.png';
import Matt from '../assets/images/avatars/user-16.png';
import Sammy from '../assets/images/avatars/user-4.png';
import Adele from '../assets/images/avatars/user-17.png';
import Greg from '../assets/images/avatars/user-3.png';
import Alex from '../assets/images/avatars/user-12.png';
import Heather from '../assets/images/avatars/user-7.png';
import Jacoby from '../assets/images/avatars/user-14.png';

const contacts = [
    {
        name: "Matt Cassel",
        status: "Excepteur sint occaecat cupidat",
        avatar: Matt,
        id: 101,
        chatHistory: [
            {
                author: "You",
                message: "Hey Matt, how are those documents coming?",
                postId: Math.floor(Math.random() * 100000),
                avatar: You,
                time: "9:37 AM"

            },
            {
                author: "Matt",
                message: "Not bad, I was able to get Sammy to help me out",
                postId: Math.floor(Math.random() * 100000),
                avatar: Matt,
                time: "9:45 AM"
            },
            {
                author: "You",
                message: "Good, i'm glad that you were able to find some help",
                postId: Math.floor(Math.random() * 100000),
                avatar: You,
                time: "9:47 AM"
            },
            {
                author: "You",
                message: "Are you planning on going to the work party tomorrow night?",
                postId: Math.floor(Math.random() * 100000),
                avatar: You,
                time: "9:47 AM"
            },
            {
                author: "Matt",
                message: "Sure, i've been looking forward to it!",
                postId: Math.floor(Math.random() * 100000),
                avatar: Matt,
                time: "9:48 AM"
            },
        ]
    },
    {
        name: "Sammy Watkins",
        status: "Excepteur sint occaecat cupidat",
        avatar: Sammy,
        id: 102,
        chatHistory: [
            {
                author: "You",
                message: "Hey Sammy, are you coming to work tomorrow?",
                postId: Math.floor(Math.random() * 100000),
                avatar: You,
                time: "10:14 AM"

            },
            {
                author: "Sammy",
                message: "Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Sed euismod nisi porta",
                postId: Math.floor(Math.random() * 100000),
                avatar: Sammy,
                time: "10:14 AM"

            }
        ]
    },
    {
        name: "Adele Dazeem",
        status: "Excepteur sint occaecat cupidat",
        avatar: Adele,
        id: 103,
        chatHistory: [
            {
                author: "Adele",
                message: "Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Adipiscing elit ut aliquam purus. Turpis in eu mi bibendum. Tempus quam pellentesque nec nam aliquam sem",
                postId: Math.floor(Math.random() * 100000),
                avatar: Adele,
                time: "2:37 PM"

            },
            {
                author: "You",
                message: "Volutpat maecenas volutpat blandit aliquam. Diam quam nulla porttitor massa id neque aliquam vestibulum",
                postId: Math.floor(Math.random() * 100000),
                avatar: You,
                time: "2:39 PM"

            },
            {
                author: "You",
                message: "In pellentesque massa placerat",
                postId: Math.floor(Math.random() * 100000),
                avatar: You,
                time: "2:40 PM"

            },
            {
                author: "Adele",
                message: "Mattis aliquam faucibus purus in massa. Posuere morbi leo urna molestie",
                postId: Math.floor(Math.random() * 100000),
                avatar: Adele,
                time: "2:42 PM"
            },
            {
                author: "Adele",
                message: "Magna fermentum iaculis eu non. Eget est lorem ipsum dolor. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Fringilla urna porttitor rhoncus dolor purus non. Tincidunt arcu non sodales neque sodales ut. Risus viverra adipiscing at in. Sed velit dignissim sodales ut eu sem",
                postId: Math.floor(Math.random() * 100000),
                avatar: Adele,
                time: "2:44 PM"
            },
            {
                author: "You",
                message: "Ok",
                postId: Math.floor(Math.random() * 100000),
                avatar: You,
                time: "2:44 PM"
            }
        ]
    },
    {
        name: "Greg Olsen",
        status: "Excepteur sint occaecat cupidat",
        avatar: Greg,
        id: 104,
        chatHistory: [
            {
                author: "You",
                message: "Tellus rutrum tellus pellentesque",
                postId: Math.floor(Math.random() * 100000),
                avatar: You,
                time: "11:46 AM"
            },
            {
                author: "Greg",
                message: "Libero justo laoreet sit amet cursus sit. At consectetur lorem donec massa sapien faucibus et. Nibh nisl condimentum id venenatis a condimentum vitae sapien",
                postId: Math.floor(Math.random() * 100000),
                avatar: Greg,
                time: "11:50 AM"
            }
        ]
    },
    {
        name: "Alex Taylor",
        status: "Excepteur sint occaecat cupidat",
        avatar: Alex,
        id: 105,
        chatHistory: [
            {
                author: "Alex",
                message: "Hi Coby, have you been adjusting well to the new position?",
                postId: Math.floor(Math.random() * 100000),
                avatar: Alex,
                time: "2:19 PM"
            },
            {
                author: "You",
                message: "Integer quis auctor elit sed vulputate mi sit. Nunc pulvinar sapien malesuada.",
                postId: Math.floor(Math.random() * 100000),
                avatar: You,
                time: "2:21 PM"
            },
            {
                author: "Alex",
                message: "That's good to know, just let me know if you need anything",
                postId: Math.floor(Math.random() * 100000),
                avatar: Alex,
                time: "2:23 PM"
            },
            {
                author: "You",
                message: "Aliquet porttitor lacus luctus accumsan. Sapien eget mi proin sed libero",
                postId: Math.floor(Math.random() * 100000),
                avatar: You,
                time: "2:24 PM"
            }
        ]
    },
    {
        name: "Heather Bridges",
        status: "Excepteur sint occaecat cupidat",
        avatar: Heather,
        id: 106,
        chatHistory: [
            {
                author: "You",
                message: "Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Sapien eget mi proin sed",
                postId: Math.floor(Math.random() * 100000),
                avatar: You,
                time: "12:21 PM"
            },
            {
                author: "Heather",
                message: "Venenatis a condimentum vitae sapien pellentesque.",
                postId: Math.floor(Math.random() * 100000),
                avatar: Heather,
                time: "5:11 PM"
            },
            {
                author: "Heather",
                message: "Urna molestie at elementum eu facilisis sed odio. Justo laoreet sit amet cursus sit amet dictum",
                postId: Math.floor(Math.random() * 100000),
                avatar: Heather,
                time: "5:11 PM"
            },
            {
                author: "You",
                message: "Lacus sed viverra tellus in",
                postId: Math.floor(Math.random() * 100000),
                avatar: You,
                time: "5:11 PM"
            }
        ]
    },
    {
        name: "Jacoby Jones",
        status: "Excepteur sint occaecat cupidat",
        avatar: Jacoby,
        id: 107,
        chatHistory: [
            {
                author: "You",
                message: "Hey Jacoby, ultrices in iaculis nunc sed augue",
                postId: Math.floor(Math.random() * 100000),
                avatar: You,
                time: "5:08 PM"
            }
        ]
    }
];

export default contacts;