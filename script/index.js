const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(json => {
            displayLesson(json.data)
        })
}
const loadLabelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayWord(data.data)
        })
}
// "id": 4,
// "level": 5,
// "word": "Diligent",
// "meaning": "পরিশ্রমী",
// "pronunciation": "ডিলিজেন্ট"
const displayWord = (words) => {
    const wordContainer = document.getElementById("word-container")
    wordContainer.innerHTML = "";
    words.forEach(word => {
        const card = document.createElement("div")
        card.innerHTML = `
         <div class="bg-white rounded-lg p-10 text-center space-y-3 shadow-sm">
            <h1 class="font-bold">${word.word}</h1>
            <p class="font-semibold text-[15px]">Meaning /Pronounciation</p>
            <p class="bangla font-semibold">"${word.meaning} / ${word.pronunciation}"</p>
            <div class="flex justify-between">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
        `
        wordContainer.append(card)
    });
}
const displayLesson = (lessons) => {
    const lessonContainer = document.getElementById("lesson-container")
    lessonContainer.innerHTML = ""
    for (let lesson of lessons) {
        const btnDiv = document.createElement("div")
        btnDiv.innerHTML = `
        <button onclick="loadLabelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Learn-${lesson.level_no}</button>
       
        `
        lessonContainer.append(btnDiv)
    }
}
loadLesson()