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

(async function () {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    console.log(profileData)
})()