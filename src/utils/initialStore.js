/* sample data store*/
export default { 
    currentUserId: "erin",
    users:[
        {
            id:"erin",
            email:"bergec@bc.edu",
            photo:"/assets/erinProfile.png",
            name: "Erin Berg",
            bio:"I like big hugs and long walks",
            
        },
        {
            id:"courtney",
            email:"petershy@bc.edu",
            photo:"/assets/courtneyProfile.png",
            name:"Courtney Peterson",
            bio:"THE woman in stem. California cutie"
        },

        {
            id:"maddie",
            email:"kaubrys@bc.edu",
            photo:"/assets/maddieProfile.png",
            name: "Maddie Kaubrys",
            bio:"From Maine.",
            
        },
        {
            id:"matt",
            email:"oneilop@bc.edu",
            photo:"/assets/mattProfile.png",
            name: "Matt O'Neil",
            bio: "I just like to smile. Smiling's my favorite. Roll eags forever.",
            
        },
        {
            id:"keith",
            email:"carrollky@bc.edu",
            photo:"/assets/keithProfile.png",
            name: "Keith Carroll",
            bio: "",
            
        }
    ],
    followers:[
        {
            userId:"erin",
            followerId:"courtney"
        },
        {
            userId:"erin",
            followerId:"matt"
        },
        {
            userId:"erin",
            followerId:"maddie"
        }
    ],
    posts:[
        {   
            id:"post-1",
            userId:"erin",
            photo:"/assets/erinPost3.jpg",
            desc:"Senior Sunrise",
            datetime: "2020-02-09T22:45:28Z",   

        },
        {
            id:"post-2",
            userId:"maddie",
            photo:"/assets/maddiePost2.png",
            desc:"Last Night of College :( ",
            datetime: "2020-02-07T22:45:28Z",
        },
        {
            id:"post-3",
            userId:"erin",
            photo:"/assets/erinPost2.png",
            desc:"#CostaRica #SustainabilityTrip",
            datetime: "2020-02-06T22:45:28Z",
        },
        {
            id:"post-4",
            userId:"erin",
            photo:"/assets/maddiePost.jpg",
            desc:"10/10 - Rex Orange County",
            datetime: "2020-02-05T22:45:28Z",
        },
        {
            id:"post-5",
            userId:"courtney",
            photo:"/assets/courtneyPost2.png",
            desc:"Hiking Kinsman Ridge",
            datetime: "2020-02-04T22:45:28Z",
        },
        {
            id:"post-6",
            userId:"keith",
            photo:"/assets/keithPost.jpg",
            desc:"First Sunset of Senior Year!",
            datetime: "2020-02-03T22:45:28Z",
        },        
        {
            id:"post-7",
            userId:"matt",
            photo:"/assets/mattPost.jpg",
            desc:"Wat's up? Sun's up! -- at Angkor Wat",
            datetime: "2020-02-02T22:45:28Z",
        },
        {
            id:"post-8",
            userId:"courtney",
            photo:"/assets/courtneyPost.png",
            desc:"Old friends and new friends on the Camino De Santiago!",
            datetime: "2020-02-01T22:45:28Z",
        },
    ],
    comments:[
        {
            userId:"keith",
            postId:"post-1",
            text:"Miss it already!",
            datetime:"2020-02-09T22:51:40Z"
        },
        {
            userId:"erin",
            postId:"post-2",
            text:"CUTE", 
            datetime:"2020-02-09T22:52:01Z"
        },
        {
            userId:"courtney",
            postId:"post-2",
            text:"Love you!", 
            datetime:"2020-02-09T22:54:20Z"
        }
    ],
    likes:[
        {
            userId:"keith",
            postId:"post-1",
            datetime:"2020-02-09T22:50:40Z"
        },
        {
            userId:"erin",
            postId:"post-2",
            datetime:"2020-02-09T22:51:40Z"
        },
        {
            userId:"matt",
            postId:"post-2",
            datetime:"2020-02-09T22:54:20Z"
        },
        {
            userId:"courtney",
            postId:"post-3",
            datetime:"2020-02-09T22:53:40Z"
        },
        {
            userId:"courtney",
            postId:"post-4",
            datetime:"2020-02-09T22:53:40Z"
        },
        {
            userId:"courtney",
            postId:"post-5",
            datetime:"2020-02-09T22:53:40Z"
        },
        {
            userId:"courtney",
            postId:"post-6",
            datetime:"2020-02-09T22:53:40Z"
        },
        {
            userId:"courtney",
            postId:"post-7",
            datetime:"2020-02-09T22:53:40Z"
        },
        {
            userId:"keith",
            postId:"post-2",
            datetime:"2020-02-09T22:54:20Z"
        },
        {
            userId:"maddie",
            postId:"post-3",
            datetime:"2020-02-09T22:53:40Z"
        },
        {
            userId:"maddie",
            postId:"post-4",
            datetime:"2020-02-09T22:53:40Z"
        },
        {
            userId:"maddie",
            postId:"post-5",
            datetime:"2020-02-09T22:53:40Z"
        },
        {
            userId:"maddie",
            postId:"post-6",
            datetime:"2020-02-09T22:53:40Z"
        },
        {
            userId:"maddie",
            postId:"post-7",
            datetime:"2020-02-09T22:53:40Z"
        },
    
    ]
}

