function updateProfileInfo (profileData) {
    const photo = document.getElementById("profile.photo")
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById("profile.name")
    name.innerHTML = profileData.name

    const job = document.getElementById("profile.job")
    job.innerHTML = profileData.job

    const loc = document.getElementById("profile.location")
    loc.innerHTML = profileData.location

    const phone = document.getElementById("profile.phone")
    phone.innerHTML = profileData.phone

    const email = document.getElementById("profile.email")
    email.innerHTML = profileData.email
}

function updateHardSkillsInfo(profileData) {
    const hardSkills = document.getElementById("skills.hardSkills")

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => 
        `<img src="${skill.logo}" alt="${skill.name}">`
    ).join('')
}

function updateSoftSkillsInfo(profileData) {
    const softSkills = document.getElementById("skills.softSkills")

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateEducationInfo(profileData) {
    const educations = document.getElementById("educations")

    profileData.educations.map(education => {
        return `<li>
        <p>${education.name}</p>
        <span>${education.font} - ${education.ano} - ${education.horas}</span>
        </li>`
    })
}

function updateProjectsInfo(profileData) {
    const projects = document.getElementById("projects")

    projects.innerHTML = profileData.portfolio.map(project => {
        return `<li>
        <span>${project.name}</span>
        <a href="${project.url}" target="_blank">${project.url}</a>
        </li>`
    }).join('')
}

(async function () {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkillsInfo(profileData)
    updateHardSkillsInfo(profileData)
    updateProjectsInfo(profileData)
    console.log(profileData)
})()