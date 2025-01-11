const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main(){
    try {
        await db.category.createMany({
            data: [
                {name: "Life Coaches"},
                {name: "Emotional Support"},
                {name: "Fitness and Wellness"},
                {name: "Educational Advisors"},
                {name: "Career Guides"},
                {name: "Relationship Coaches"},
                {name: "Travel Companions"},
                {name: "Entertainment and Gamers"},
                {name: "Spiritual Guides"},
                {name: "Friends and Partners"},
                {name: "Musicians"}
            ]
        })
    } catch (error){
        console.error("Error seeding default categories", error)
    } finally {
        await db.$disconnect();
    }
}

main();