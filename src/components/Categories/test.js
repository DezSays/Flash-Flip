const getData = async () => {
    const dataFetch = await fetch(`https://dezsays.github.io/API/data.json`);

    const data = await dataFetch.json();
    
    let choice = 'javascript_array_methods'
    const lvl1 = `data.${choice}.level[0].one[0]`;
    const question1 = lvl1.question;
    const answer1 = lvl1.answer;
    console.log(lvl1)
}

getData()