export const funFact = async () => {
    try {
        const fact = await fetch("https://api.api-ninjas.com/v1/facts?limit=");
        console.log(fact);

        return fact;
    } catch (error) {
        new Error("error fetching facts");
    }
};
