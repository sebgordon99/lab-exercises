import { useState } from "react";

const cats = [
    {
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      catUrl:
        "https://imgs.search.brave.com/t5SxifovOOEYFBC1AGylMmIWaYZg5-KKSiheHFmw-M4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvY2F0L3NtYWxs/L2NhdF9QTkc1MDUz/Ni5wbmc",
    },
    {
      name: "Cougar",
      latinName: "Puma concolor",
      catUrl:
        "https://imgs.search.brave.com/SBf-IZdzyPc797YN6leFKtxnfhlO2l-m9rfCchfJnms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvY2F0L3NtYWxs/L2NhdF9QTkc1MDQ1/NC5wbmc",
    },
    {
      name: "Jaguar",
      latinName: "Panthera onca",
      catUrl:
        "https://imgs.search.brave.com/_VdkS4yg50qX1BwxoBpWGHNb2j9JnStLqxozxfSyeis/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvY2F0L3NtYWxs/L2NhdF9QTkc1MDQ3/MC5wbmc",
    },
    {
      name: "Leopard",
      latinName: "Panthera pardus",
      catUrl:
        "https://imgs.search.brave.com/uwSkSoa9WPvBWRVBN-GsMFlOWm_Ta_y2ApjYkGxA9e4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZmLzBm/LzkzLzZmMGY5M2Ni/MDY2YTYyYmYxNzkx/ZDNlNmQzZjNkMjg3/LmpwZw",
    },
    {
      name: "Lion",
      latinName: "Panthera leo",
      catUrl:
        "https://imgs.search.brave.com/Kmp_Nnp6fzpjI-36GSMbHTd6u5TyHwPVfjkvFmhv1MQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvY2F0L3NtYWxs/L2NhdF9QTkc1MDQy/Ny5wbmc",
    },
    {
      name: "Snow leopard",
      latinName: "Panthera uncia",
      catUrl:
        "https://imgs.search.brave.com/SUuCsPRMtb-_JOcPHOcHI07YcErR-JOWn5psxntMQmM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvY2F0L3NtYWxs/L2NhdF9QTkc1MDQ5/MS5wbmc",
    },
    {
      name: "Tiger",
      latinName: "Panthera tigris",
      catUrl:
        "https://imgs.search.brave.com/KO7u3TGRpf4U0cUSmv57op9DlIhO_wUxP3YQRYNnyuA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvY2F0L3NtYWxs/L2NhdF9QTkc1MDQ1/OC5wbmc",
    },
  ];

function BigCatsSort() {
// let currentCats = cats - this is the same as the currentCats current state.
// currentCats = [1, 2, 3] - setting the new value of currentCats to setCurrentCats([1, 2, 3])
const [currentCats, setCurrentCats] = useState(cats);
  const catItems = currentCats.map((cat) => (
   <li>
      The cat <strong>"{cat.name}"</strong> has the latin name{" "}
      <i style={{ color: "red" }}>{cat.latinName}</i>, and looks like this:
      <div>
        <img src={cat.catUrl} alt={cat.name} />
      </div>
    </li>
  ));

  const handleSortCatsAlphabetically = () => {
    let alphaSortCats = [...currentCats];
    alphaSortCats.sort((a, b) => a.name.localeCompare(b.name));
    setCurrentCats(alphaSortCats);
  }

  const handleReverseCats = () => {
    // first clone the original, so we don’t mutate it
    let newCats = [...currentCats];
    newCats.reverse(); // 2. modify the clone
    setCurrentCats(newCats); // 3. set updated clone in state
  };
  
//   function isPantheras(value) {
//     return value.latinName == "Panthera"
//   }

  const filterPantheras = () => {
    let pantherasCats = [...currentCats];
    let sortedPCats = pantherasCats.filter((cat) => cat.latinName.includes("Panthera"));

    setCurrentCats(sortedPCats);
  }

  const handleResetList = () => {
    let resetCats = cats;
    setCurrentCats(resetCats);
  }

  return (
    <div className="ReverseCatsList">
      <ul>{catItems}</ul>
      <button onClick={handleSortCatsAlphabetically}>Alphabet Sort Cats</button>
      <button onClick={handleReverseCats}>Reverse Cats</button>
      <button onClick={filterPantheras}>Filter Pantheras</button>
      <button onClick={handleResetList}>Reset List</button>
    </div>
  );
}

export default BigCatsSort;