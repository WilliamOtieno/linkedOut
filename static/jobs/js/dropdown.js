var mydata = [
    [" Architecture and engineering","Architect"],
    [" Architecture and engineering","Civil engineer"],
    [" Architecture and engineering","Landscape architect"],
    [" Architecture and engineering","Sustainable designer"],
    [" Architecture and engineering","Biomedical engineer"],
    [" Arts, culture and entertainment","Singer/songwriter"],
    [" Arts, culture and entertainment","Music producer"],
    [" Arts, culture and entertainment","Art curator"],
    [" Arts, culture and entertainment","Animator/video game designer"],
    [" Arts, culture and entertainment","Filmmaker"],
    [" Arts, culture and entertainment","Graphic designer"],
    [" Arts, culture and entertainment","Fashion designer"],
    [" Arts, culture and entertainment","Photographer"],
    [" Business, management and administration","Human resources manager"],
    [" Business, management and administration","Marketing assistant"],
    [" Business, management and administration","Accountants"],
    [" Business, management and administration","Secretary"],
    [" Business, management and administration","Entrepreneur/small business owner\n"],
    [" Business, management and administration","Real estate agent"],
    [" Business, management and administration","Business development manager"],
    [" Communications","Journalist"],
    [" Communications","Copywriter"],
    [" Communications","Communications manager"],
    [" Communications","Public relations specialist"],
    [" Communications","Meeting/event planner"],
    [" Communications","Social media manager"],
    [" Communications","Brand manager"],
    [" Community and social services","School counselor"],
    [" Community and social services","Speech pathologist"],
    [" Community and social services","Rehabilitation counselor"],
    [" Community and social services","Licensed clinical social worker"],
    [" Community and social services","Child welfare social worker"],
    [" Community and social services","Palliative and hospice care worker"],
    [" Education","Special education teacher"],
    [" Education","School principal"],
    [" Education","Superintendent"],
    [" Education","College professor"],
    [" Education","School librarian"],
    [" Education","Substitute teacher"],
    [" Science and technology","Archeologist"],
    [" Science and technology","Software engineer"],
    [" Science and technology","Laboratory technician"],
    [" Science and technology","Microbiologist"],
    [" Science and technology","Physicist"],
    [" Installation, repair and maintenance ","Auto mechanic"],
    [" Installation, repair and maintenance ","Landscaper and groundskeeper"],
    [" Installation, repair and maintenance ","Bicycle repairer"],
    [" Installation, repair and maintenance ","Wind turbine technician"],
    [" Installation, repair and maintenance ","Plumber"],
    [" Farming, fishing and forestry","Agricultural worker"],
    [" Farming, fishing and forestry","Animal breeder"],
    [" Farming, fishing and forestry","Nursery worker"],
    [" Farming, fishing and forestry","Forest and conservation worker"],
    [" Farming, fishing and forestry","Fisher"],
    [" Government","School cafeteria worker"],
    [" Government","Congressional staff"],
    [" Government","National park ranger"],
    [" Government","Mail carrier"],
    [" Government","Elementary school teacher"],
    [" Health and medicine","Anesthesiologist"],
    [" Health and medicine","Dental assistant"],
    [" Health and medicine","Nurse"],
    [" Health and medicine","Veterinarian"],
    [" Health and medicine","Physical therapist"],
    [" Law and public policy","Lobbyist"],
    [" Law and public policy","Public administrator"],
    [" Law and public policy","Paralegal"],
    [" Law and public policy","Lawyer"],
    [" Law and public policy","Labor relations specialist"],
    [" Sales","Sales associate"],
    [" Sales","sales development rep"],
    [" Sales","Account executive"],
    [" Sales","Regional sales manager"],
    [" Sales","VP of sales"]
];

function makeDropdown(data,level1filter) {

    const filteredArray = data.filter(r => r[0] === level1filter);

    const uniqueList = getUniqueValues(filteredArray,1);

    const selectLevel2 = document.getElementById("level2");

    populateDropDown(selectLevel2,uniqueList);
}

function applyDropDown(){
    const selectLevel1value = document.getElementById("level1").value;
    makeDropdown(mydata, selectLevel1value)
}

function afterDocumentLoads(){
    populateFirstLevelDropdown();
    applyDropDown();
}

function getUniqueValues(data,index){
    const uniqueOptions = new Set();
    data.forEach(r => uniqueOptions.add(r[index]));

    return [...uniqueOptions];
}

function populateFirstLevelDropdown(){
    const uniqueList = getUniqueValues(mydata,0);
    const el = document.getElementById("level1");
    populateDropDown(el,uniqueList);

}

function populateDropDown(el,listAsArray){
    el.innerHTML = "";

    listAsArray.forEach(item => {
        const option = document.createElement("option");
        option.textContent = item;
        el.appendChild(option);
    });
}

function filterArray(data,filtersAsArray){

}

document.getElementById("level1").addEventListener("change",applyDropDown);
document.addEventListener("DOMContentLoaded",afterDocumentLoads);