import React from 'react';

export function Info() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    function displayPicture() {
      const random = Math.floor(Math.random() * 1000);
      fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
        .then((response) => response.json())
        .then((data) => {
          const imgUrl = `https://picsum.photos/id/${data[0].id}/150/200?grayscale`;
          setImageUrl(imgUrl);
        });
    }
    displayPicture();
  }, []);

  return (
    <main className="container-fluid">
            <h1>Welcome!</h1>
            <p className="info">
                Welcome to Roll Character! This website allows you to create the base for a DND character. 
                Get you race, class, alignment, and background! After that you can roll for stats and assign them how you wish! 
                Finally you can name your character and save them!
            </p>
            <h2>Getting Started</h2>
            <p className="info">
                To start making your character navigate to the home page and click the "Roll Here" button. That will begin your character creation journey! 
                It's pretty simple, after you do your first roll you will begin rolling for stats and after each stat roll (6 in total) you will pick which ability to assign it to from a dropdown menu. 
                After you have assigned your final stat you will see a summary of your character and type in a name. 
                Then just click  "Save to Archive" and your character will be in your archive to view!
            </p>
            <div id="picture" className="picture-box">
                
            </div>
            <div id="monstie" className="monstie">

            </div>
            <hr />
        </main>
  );
}