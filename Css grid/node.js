function color () {
    const getEl = document.getElementsByClassName("grid")
    for(let i=0; i<getEl.length; i++){
        const color = ["#425F57", "#749F82", "#A8E890", "#CFFF8D", "#DD5353", "#B73E3E", "#DBC8AC","#EDDBC0", "#FF99D7"]
        let num = Math.round(Math.random() * 8)
        getEl[i].style.backgroundColor = color[num]
    }
}