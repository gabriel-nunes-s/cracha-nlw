const links_social_media = {
  github: "death-simphony",
  youtube: "UC2CbPk1gsEEGV2jHIPRZUvw",
  linkedin: "gabriel-n-dos-santos",
  instagram: "i_gns0o",
  twitter: "nunez_art_?t=52gCkVeBDMOQDBoMQsj32g&s=09"
}

function change_links() {
//Ao invés de criar uma id para cada li, pegou o ul inteiro

  for (let li of social_links.children) {
    const social = li.getAttribute('class')

    if (social == "youtube") {
      li.children[0].href = `https://${social}.com/channel/${links_social_media[social]}`
      //o link do youtube tem que adicionar channel para canais comuns
    } else if (social == "linkedin") {
      li.children[0].href = `https://www.${social}.com/in/${links_social_media[social]}/`
    } else {
      li.children[0].href = `https://${social}.com/${links_social_media[social]}`
    }
    //alert(li.children[0].href)
  }
}
change_links()

function get_github_profile_info() {
  const url = `https://api.github.com/users/${links_social_media.github}`
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    user_name.textContent = data.name
    user_bio.textContent = data.bio
    user_link.href = data.html_url
    user_login.textContent = data.login
    user_image.src = data.avatar_url
  })
}
get_github_profile_info()


//Arrow function:
//é uma forma contraída de realizar uma função!!
//função anônima, sem nome, apenas argumentos
// quando nao tem argumentos, apenas os () 
