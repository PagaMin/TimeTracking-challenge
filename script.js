// ----------------------------- STATS DAILY
const nameStatsWork = document.querySelector(".sub-stats-work .work-stats");
const currentHoursWork = document.querySelector(".sub-stats-work .current-hrs");
const previousHoursWork = document.querySelector(".sub-stats-work .previous-hrs");

const nameStatsPlay = document.querySelector(".sub-stats-play .work-stats");
const currentHoursPlay = document.querySelector(".sub-stats-play .current-hrs");
const previousHoursPlay = document.querySelector(".sub-stats-play .previous-hrs");

const nameStatsStudy = document.querySelector(".sub-stats-study .work-stats");
const currentHoursStudy = document.querySelector(".sub-stats-study .current-hrs");
const previousHoursStudy = document.querySelector(".sub-stats-study .previous-hrs");

const nameStatsExercise = document.querySelector(".sub-stats-exercise .work-stats");
const currentHoursExercise = document.querySelector(".sub-stats-exercise .current-hrs");
const previousHoursExercise = document.querySelector(".sub-stats-exercise .previous-hrs");

const nameStatsSocial = document.querySelector(".sub-stats-social .work-stats");
const currentHoursSocial = document.querySelector(".sub-stats-social .current-hrs");
const previousHoursSocial = document.querySelector(".sub-stats-social .previous-hrs");

const nameStatsSelfCare = document.querySelector(".sub-stats-self-care .work-stats");
const currentHoursSelfCare = document.querySelector(".sub-stats-self-care .current-hrs");
const previousHoursSelfCare = document.querySelector(".sub-stats-self-care .previous-hrs");

// ----------------------------- STATS WEEKLY 

const nameStatsWorkWe = document.querySelector(".stats-weekly .sub-stats-work .work-stats");
const currentHoursWorkWe = document.querySelector(".stats-weekly .sub-stats-work .current-hrs");
const previousHoursWorkWe = document.querySelector(".stats-weekly .sub-stats-work .previous-hrs");

const nameStatsPlayWe = document.querySelector(".stats-weekly .sub-stats-play .work-stats");
const currentHoursPlayWe = document.querySelector(".stats-weekly .sub-stats-play .current-hrs");
const previousHoursPlayWe = document.querySelector(".stats-weekly .sub-stats-play .previous-hrs");

const nameStatsStudyWe = document.querySelector(".stats-weekly .sub-stats-study .work-stats");
const currentHoursStudyWe = document.querySelector(".stats-weekly .sub-stats-study .current-hrs");
const previousHoursStudyWe = document.querySelector(".stats-weekly .sub-stats-study .previous-hrs");

const nameStatsExerciseWe = document.querySelector(".stats-weekly .sub-stats-exercise .work-stats");
const currentHoursExerciseWe = document.querySelector(".stats-weekly .sub-stats-exercise .current-hrs");
const previousHoursExerciseWe = document.querySelector(".stats-weekly .sub-stats-exercise .previous-hrs");

const nameStatsSocialWe = document.querySelector(".stats-weekly .sub-stats-social .work-stats");
const currentHoursSocialWe = document.querySelector(".stats-weekly .sub-stats-social .current-hrs");
const previousHoursSocialWe = document.querySelector(".stats-weekly .sub-stats-social .previous-hrs");

const nameStatsSelfCareWe = document.querySelector(".stats-weekly .sub-stats-self-care .work-stats");
const currentHoursSelfCareWe = document.querySelector(".stats-weekly .sub-stats-self-care .current-hrs");
const previousHoursSelfCareWe = document.querySelector(".stats-weekly .sub-stats-self-care .previous-hrs");

// ----------------------------- STATS MONTHLY

const nameStatsWorkMo = document.querySelector(".stats-monthly .sub-stats-work .work-stats");
const currentHoursWorkMo = document.querySelector(".stats-monthly .sub-stats-work .current-hrs");
const previousHoursWorkMo = document.querySelector(".stats-monthly .sub-stats-work .previous-hrs");

const nameStatsPlayMo = document.querySelector(".stats-monthly .sub-stats-play .work-stats");
const currentHoursPlayMo = document.querySelector(".stats-monthly .sub-stats-play .current-hrs");
const previousHoursPlayMo = document.querySelector(".stats-monthly .sub-stats-play .previous-hrs");

const nameStatsStudyMo = document.querySelector(".stats-monthly .sub-stats-study .work-stats");
const currentHoursStudyMo = document.querySelector(".stats-monthly .sub-stats-study .current-hrs");
const previousHoursStudyMo = document.querySelector(".stats-monthly .sub-stats-study .previous-hrs");

const nameStatsExerciseMo = document.querySelector(".stats-monthly .sub-stats-exercise .work-stats");
const currentHoursExerciseMo = document.querySelector(".stats-monthly .sub-stats-exercise .current-hrs");
const previousHoursExerciseMo = document.querySelector(".stats-monthly .sub-stats-exercise .previous-hrs");

const nameStatsSocialMo = document.querySelector(".stats-monthly .sub-stats-social .work-stats");
const currentHoursSocialMo = document.querySelector(".stats-monthly .sub-stats-social .current-hrs");
const previousHoursSocialMo = document.querySelector(".stats-monthly .sub-stats-social .previous-hrs");

const nameStatsSelfCareMo = document.querySelector(".stats-monthly .sub-stats-self-care .work-stats");
const currentHoursSelfCareMo = document.querySelector(".stats-monthly .sub-stats-self-care .current-hrs");
const previousHoursSelfCareMo = document.querySelector(".stats-monthly .sub-stats-self-care .previous-hrs");


// ------------------------------ FUNCTION DAILY

async function showMeJsonDaily() {

    const jsonArchive = await fetch("data.json")


    const data = await jsonArchive.json()


    nameStatsWork.textContent = data[0].title
    currentHoursWork.textContent = `${data[0].timeframes.daily.current}hrs`
    previousHoursWork.textContent = `Last Week - ${data[0].timeframes.daily.previous}hrs`

    nameStatsPlay.textContent = data[1].title
    currentHoursPlay.textContent = `${data[1].timeframes.daily.current}hrs`
    previousHoursPlay.textContent = `Last Week - ${data[1].timeframes.daily.previous}hrs`

    nameStatsExercise.textContent = data[2].title
    currentHoursExercise.textContent = `${data[2].timeframes.daily.current}hrs`
    previousHoursExercise.textContent = `Last Week - ${data[2].timeframes.daily.previous}hrs`

    nameStatsStudy.textContent = data[3].title
    currentHoursStudy.textContent = `${data[3].timeframes.daily.current}hrs`
    previousHoursStudy.textContent = `Last Week - ${data[3].timeframes.daily.previous}hrs`

    nameStatsSocial.textContent = data[4].title
    currentHoursSocial.textContent = `${data[4].timeframes.daily.current}hrs`
    previousHoursSocial.textContent = `Last Week - ${data[4].timeframes.daily.previous}hrs`

    nameStatsSelfCare.textContent = data[5].title
    currentHoursSelfCare.textContent = `${data[5].timeframes.daily.current}hrs`
    previousHoursSelfCare.textContent = `Last Week - ${data[5].timeframes.daily.previous}hrs`

}
showMeJsonDaily()



// ------------------------------ FUNCTION WEEKLY

async function showMeJsonWeekly() {

    const jsonArchive = await fetch("data.json")

    const data = await jsonArchive.json()


    nameStatsWorkWe.textContent = data[0].title
    currentHoursWorkWe.textContent = `${data[0].timeframes.weekly.current}hrs`
    previousHoursWorkWe.textContent = `Last Week - ${data[0].timeframes.weekly.previous}hrs`

    nameStatsPlayWe.textContent = data[1].title
    currentHoursPlayWe.textContent = `${data[1].timeframes.weekly.current}hrs`
    previousHoursPlayWe.textContent = `Last Week - ${data[1].timeframes.weekly.previous}hrs`

    nameStatsExerciseWe.textContent = data[2].title
    currentHoursExerciseWe.textContent = `${data[2].timeframes.weekly.current}hrs`
    previousHoursExerciseWe.textContent = `Last Week - ${data[2].timeframes.weekly.previous}hrs`

    nameStatsStudyWe.textContent = data[3].title
    currentHoursStudyWe.textContent = `${data[3].timeframes.weekly.current}hrs`
    previousHoursStudyWe.textContent = `Last Week - ${data[3].timeframes.weekly.previous}hrs`

    nameStatsSocialWe.textContent = data[4].title
    currentHoursSocialWe.textContent = `${data[4].timeframes.weekly.current}hrs`
    previousHoursSocialWe.textContent = `Last Week - ${data[4].timeframes.weekly.previous}hrs`

    nameStatsSelfCareWe.textContent = data[5].title
    currentHoursSelfCareWe.textContent = `${data[5].timeframes.weekly.current}hrs`
    previousHoursSelfCareWe.textContent = `Last Week - ${data[5].timeframes.weekly.previous}hrs`

}

showMeJsonWeekly()


// ------------------------------ FUNCTION MONTHLY


async function showMeJsonMonthly() {

    const jsonArchive = await fetch("data.json")

    const data = await jsonArchive.json()


    nameStatsWorkMo.textContent = data[0].title
    currentHoursWorkMo.textContent = `${data[0].timeframes.monthly.current}hrs`
    previousHoursWorkMo.textContent = `Last Week - ${data[0].timeframes.monthly.previous}hrs`

    nameStatsPlayMo.textContent = data[1].title
    currentHoursPlayMo.textContent = `${data[1].timeframes.monthly.current}hrs`
    previousHoursPlayMo.textContent = `Last Week - ${data[1].timeframes.monthly.previous}hrs`

    nameStatsStudyMo.textContent = data[2].title
    currentHoursStudyMo.textContent = `${data[2].timeframes.monthly.current}hrs`
    previousHoursStudyMo.textContent = `Last Week - ${data[2].timeframes.monthly.previous}hrs`

    nameStatsExerciseMo.textContent = data[3].title
    currentHoursExerciseMo.textContent = `${data[3].timeframes.monthly.current}hrs`
    previousHoursExerciseMo.textContent = `Last Week - ${data[3].timeframes.monthly.previous}hrs`


    nameStatsSocialMo.textContent = data[4].title
    currentHoursSocialMo.textContent = `${data[4].timeframes.monthly.current}hrs`
    previousHoursSocialMo.textContent = `Last Week - ${data[4].timeframes.monthly.previous}hrs`

    nameStatsSelfCareMo.textContent = data[5].title
    currentHoursSelfCareMo.textContent = `${data[5].timeframes.monthly.current}hrs`
    previousHoursSelfCareMo.textContent = `Last Week - ${data[5].timeframes.monthly.previous}hrs`

}

showMeJsonMonthly()




/* DATE SELECTED*/

const dailySelected = document.querySelector(".perfil-daily");
const weeklySelected = document.querySelector(".perfil-weekly");
const monthlySelected = document.querySelector(".perfil-monthly");

/* STATS SELECTED*/

const dailyStats = document.querySelector(".stats-daily");
const weeklyStats = document.querySelector(".stats-weekly");
const monthlyStats = document.querySelector(".stats-monthly");


/* FUNCTIONS */


function showMeStats() {
    dailyStats.style.display = "none";
    weeklyStats.style.display = "none";
    monthlyStats.style.display = "none";

}

function clearSelection() {
    dailySelected.style.color = '#bdc1ff';
    weeklySelected.style.color = '#bdc1ff';
    monthlySelected.style.color = '#bdc1ff';
}

dailySelected.addEventListener("click", () => {
    clearSelection();
    showMeStats()
    dailyStats.style.display = "flex";
    dailySelected.style.color = "white";
});

weeklySelected.addEventListener("click", () => {
    clearSelection();
    showMeStats()
    weeklyStats.style.display = "flex";
    weeklySelected.style.color = "white";
});

monthlySelected.addEventListener("click", () => {
    clearSelection();
    showMeStats()
    monthlyStats.style.display = "flex";
    monthlySelected.style.color = "white";
});
