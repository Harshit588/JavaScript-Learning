// const myName = "Harshit Soni";
// const repoCount = 20;
// console.log("Name : " + myName + ", RepoCount is : " + repoCount + " value");
// console.log(`My Name is :: ${myName} and My RepoCount is :: ${repoCount}`);

// const finalName = new String("harshit arya");
// console.log(finalName.length); //12
// console.log(finalName.toUpperCase()); //HARSHIT ARYA
// console.log(finalName.charAt(3)); //s
// console.log(finalName.lastIndexOf('a')) //11
// console.log(finalName.indexOf("a")); //1

// const str1 = new String("Harshit-Soni");
// console.log(str1.substring(0, str1.indexOf("-")).toUpperCase()); // HARSHIT
// console.log(str1.substring(str1.indexOf("-") + 1, str1.length).toUpperCase()); // SONI

// const str2 = "     use Of Trim()     "
// console.log(str2.trim());

const url = "https://harshit.com/harshit%20soni/login";
if (url.includes("%20")) {
  console.log(url.replaceAll("%20", "-"));
}

