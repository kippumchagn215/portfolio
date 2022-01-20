const projectLists = [
    {   name:"Hotel for Dogs (Personal Project 2020)",
        explanation:"Made With: Html, CSS, JS, Bootstrap, React.js, Node.js and MongoDB \n"+
        "Includes features such as login, creating accounts, pricing, checkout, and your bookings pages \n" + 
        "To provide the features listed above Frontend(React) interacts with Backend(Node.js) that is connected with database(MongoDB) to store and fetch corresponding information based on the user's request. Also in storing process to protect users private information hashing and salting for encryption is used",
        code:"https://github.com/kippumchagn215/doghotelfront",
        demo:"https://www.youtube.com/watch?v=3pzvCKcfFSM",
        screenshots:[
            {
                src:"/images/proj_Img/Hotel/Hotel_SignUp.png",
                alt:"SignUp Page",
                imgtitle:"SignUp Page"
            },
            {
                src:"/images/proj_Img/Hotel/Hotel_SignIn.png",
                alt:"SignIn Page",
                imgtitle:"SignIn Page"
            },
            {
                src:"/images/proj_Img/Hotel/Hotel_Main.png",
                alt:"Main Page",
                imgtitle:"Main Page"
            },
            {
                src:"/images/proj_Img/Hotel/Hotel_Price.png",
                alt:"Price Page",
                imgtitle:"Price Page"
            },
            {
                src:"/images/proj_Img/Hotel/Hotel_Checkout.png",
                alt:"Checkout Page",
                imgtitle:"Checkout Page"
            },
            {
                src:"/images/proj_Img/Hotel/Hotel_MyBooking.png",
                alt:"MyBooking Page",
                imgtitle:"MyBooking Page"
            } ,
            {
                src:"/images/proj_Img/Hotel/Hotel_DB.png",
                alt:"HotelDB page",
                imgtitle:"DB Page"
            }
        ]
        
    },
    {   name:"Monopoly (Group Project 2021)",
        explanation:"Made With: Unity and C# \n"+
        "wrote and designed scripts in c# to implement  game rules of monopoly and constructed an environment that scripts and game objects can interact effectively with each other \n" + 
        "created game objects that are necessary for the game such as dice and tiles\n" +
        "overall structure of the script: it has a base script which contains most logic to implement game rules and it also works as the temporary database system for the game which has an array of land class which stores all the information about each tile\n"+
        "when the player rolls a dice, the value of dice rolled, player number and the index of tile the players on will be sent to base script from player script. Inside base script using the index of the land that players is on as a key, it will retrieve all the information about the land the player is on. Based on the information retrieved it displays or hides the user interface so that the user can take appropriate action. If user action changes the value of any attribute of the land, it will immediately reflect the change on tile by directly accessing the game object\n",
        code:"https://github.com/ujinikim/Unity-3D-monopoly",
        demo:"https://www.youtube.com/watch?v=TEdjsNa90Io",
        screenshots:[
            {
                src:"/images/proj_Img/Monopoly/Board.png",
                alt:"Board Page",
                imgtitle:"Board"
            },
            {
                src:"/images/proj_Img/Monopoly/Building.png",
                alt:"Building",
                imgtitle:"Building"
            },
            {
                src:"/images/proj_Img/Monopoly/Players.png",
                alt:"Players",
                imgtitle:"Players"
            },
            {
                src:"/images/proj_Img/Monopoly/3dDice.png",
                alt:"3dDice",
                imgtitle:"3dDice"
            },
            {
                src:"/images/proj_Img/Monopoly/DiceCheckZone.png",
                alt:"DiceCheckZone",
                imgtitle:"Dice Value CheckZone"
            },
        ]
        
    },
    {   name:"Tic-Tac-Toe A.I (Group Project 2021)",
        explanation:"Made With: Python \n" + 
        "Created a Tic-Tac-Toe A.I that is capable of playing against human players using Q-learning\n" +
        "In order to generate a Tic-Tac-Toe A.I with the highest win rate using Q-learning reinforcement algorithm, and to compare Q-learning with Neural Network, we have added a function to generate win rate graphs to find appropriate hyperparameter values such as exploration rate, exploitation rate, and learning rate \n"+
        "Added grid expansion feature, so that the user can play different types of games such as tic-tac-toe, connected 4, and connected 5(aka Gomoku) \n"+ 
        "Report about the comparison between the two algorithms and whole summary of the project is included in report section on Github",
        code:"https://github.com/ujinikim/ML-Tic-Tac-Toe",
        demo:"https://www.youtube.com/watch?v=U9jwxqbM0U8",
        report:"https://github.com/ujinikim/ML-Tic-Tac-Toe/blob/main/Project-Report.docx",
        screenshots:[
            {
                src:"/images/proj_Img/Tic-Tac-Toe/Tic-Tac-Toe.png",
                alt:"Board Page",
                imgtitle:"Board"
            },
            {
                src:"/images/proj_Img/Tic-Tac-Toe/LR1.png",
                alt:"LR1",
                imgtitle:"X=Learning Agent LR=0.05"
            },
            {
                src:"/images/proj_Img/Tic-Tac-Toe/LR2.png",
                alt:"LR2",
                imgtitle:"X=Learning Agent LR=0.1"
            },
            {
                src:"/images/proj_Img/Tic-Tac-Toe/LR3.png",
                alt:"LR3",
                imgtitle:"X=Learning Agent LR=0.15"
            },
            {
                src:"/images/proj_Img/Tic-Tac-Toe/Exp1.png",
                alt:"Exp1",
                imgtitle:"X=Learning Agent Exp=0"
            },
            {
                src:"/images/proj_Img/Tic-Tac-Toe/Exp2.png",
                alt:"Exp2",
                imgtitle:"X=Learning Agent Exp=0.2"
            },
            {
                src:"/images/proj_Img/Tic-Tac-Toe/Exp3.png",
                alt:"Exp3",
                imgtitle:"X=Learning Agent Exp=0.4"
            },
        ]
        
    },
    // {   name:"Designed Server and Client using Java Socket (Group Project 2021)",
    //     explanation:"Made With: Java \n",
    //     code:"https://github.com/ujinikim/ML-Tic-Tac-Toe",
    //     demo:"https://www.youtube.com/watch?v=U9jwxqbM0U8",
    //     screenshots:[
    //         {
    //             src:"/images/proj_Img/Tic-Tac-Toe/Tic-Tac-Toe.png",
    //             alt:"Board Page",
    //             imgtitle:"Board"
    //         }
    //     ]
        
    // }
    
]
export default projectLists;