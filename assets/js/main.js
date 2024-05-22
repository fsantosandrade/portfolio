function updateProfileInfo (profileData) {
    const photo = document.querySelector("#profile.photo")
    photo.src = profileData.photo

(async function () {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    console.log(profileData)
})()