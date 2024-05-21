
async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/fsantosandrade/portfolio/main/assets/data/profile.json"

    const fetching = await fetch(url)
    return await fetching.json()
}