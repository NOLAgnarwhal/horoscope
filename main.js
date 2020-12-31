// HOROSCOPE WEBPAGE //

/* TODO
[x]Accept user input as month and day (month and day need +1 because JS uses 0 index)
[x]Based on date range output horoscope (if/else)
[x]Input validation to have to be a number (drop down menu?)
*/

let horoscopeArr = ["This week, it’d probably be good to keep away from any bodies of water — oceans, rivers, lakes, pools, your bathtub. I just wouldn’t risk it.", //Aries
                "You’re about to lose your marbles, but you should just let it happen. Everybody needs to go a little crazy every once in a while.", // Taurus
                "Your messy room has become an accurate representation of your whole entire life. Never too late to give getting it together a good shot, though.", // Gemini
                "You’ve kissed frog after frog, but all you’ve got is warts. The stars say it’s time to rethink your dating game. (Hint: Deleting your Tinder account would be a really good place to start.)", // Cancer
                "Whether it’s about if they are paying bills or their obnoxious snoring, your roommate needs to know you’re annoyed before you snap on them unexpectedly. Use your words (your nice ones).", // Leo
                "Your good luck is about to run out. Expect the unexpected and start coming up with backup plans for literally everything.", // Virgo
                "The stars say you’re about to get real lost. Interpret that as you will.", // Libra
                "You’re prone to making bad decisions this week, so you should probably avoid big choices of any kind for a while.", // Scorpio
                "You’re great at picking fights — too bad picking fights is a dying art form. (Nobody’s tryna fight you.)", // Sagittarius
                "Get some good coffee or something. You’ve been excessively grumpy lately and it needs to end here.", // Capricorn
                "You need to do laundry. Seriously, it’s been like two and a half weeks.", // Aquarius
                "You keep complaining that you feel like death, but do you ever actually go to bed before 4 a.m.?",] //Pisces


function getHoro() {
    date = new Date(document.getElementById('dateInput').value)
    day = (date.getDate() +1)
    month = (date.getMonth() +1)
    //Aries
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        document.getElementById('horo').innerHTML = horoscopeArr[0]
    //Taurus    
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        document.getElementById('horo').innerHTML = horoscopeArr[1]
    } 
    //Gemini
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        document.getElementById('horo').innerHTML = horoscopeArr[2]
    } 
    //Cancer
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        document.getElementById('horo').innerHTML = horoscopeArr[3]
    }     
    //Leo
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        document.getElementById('horo').innerHTML = horoscopeArr[4]
    }
    //Virgo
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        document.getElementById('horo').innerHTML = horoscopeArr[5]
    }
    //Libra 
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        document.getElementById('horo').innerHTML = horoscopeArr[6]
    }
    //Scorpio
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        document.getElementById('horo').innerHTML = horoscopeArr[7]
    }
    //Sagittarius
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        document.getElementById('horo').innerHTML = horoscopeArr[8]
    }
    //Capricorn 
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        document.getElementById('horo').innerHTML = horoscopeArr[9]
    }
    //Aquarius
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        document.getElementById('horo').innerHTML = horoscopeArr[10]
    }
    //Pisces
    else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        document.getElementById('horo').innerHTML = horoscopeArr[11]
    }
    else {
        console.log("You done messed up, A-aron")
    }
}

//Play sound on click//



function playChimes(){
    const chimes = new Audio("Chimes.mp3")
    chimes.play()
}