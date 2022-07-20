function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

saturdayFun();

const mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

mondayWork();

function wrapAdjective(specialChar = "*") {
    return function(adjective = "special") {
        return `You are ${specialChar}${adjective}${specialChar}!`;
    }
}

wrapAdjective()();



