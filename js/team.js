/* Event waits all content of a page is loaded */
document.addEventListener('DOMContentLoaded', function (){

    // Class for employee information 
    class TeamMember {
        img;
        firstName;
        lastName;
        email;
        about;
        
        constructor(img, firstName, lastName, email, about){
            this.img = img;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.about = about;
        }

        show(img, name, email, hidden) {
            img.innerHTML = `<img src="img/ma/${this.img}" alt="">`;
            name.innerHTML = this.firstName + " " + this.lastName;
            email.innerHTML = this.email;
            hidden.innerHTML = this.about;
        }
    }

    // Selecting the elements
    // Not the best solution
    const img1 = document.querySelector(".img1");
    const name1 = document.querySelector(".name1");
    const email1 = document.querySelector(".email1");
    const card1 = document.querySelector(".card1");
    const hidden1 = document.querySelector(".hidden1");

    const img2 = document.querySelector(".img2");
    const name2 = document.querySelector(".name2");
    const email2 = document.querySelector(".email2");
    const card2 = document.querySelector(".card2");
    const hidden2 = document.querySelector(".hidden2");

    const img3 = document.querySelector(".img3");
    const name3 = document.querySelector(".name3");
    const email3 = document.querySelector(".email3");
    const card3 = document.querySelector(".card3");
    const hidden3 = document.querySelector(".hidden3");

    const img4 = document.querySelector(".img4");
    const name4 = document.querySelector(".name4");
    const email4 = document.querySelector(".email4");
    const card4 = document.querySelector(".card4");
    const hidden4 = document.querySelector(".hidden4");

    const img5 = document.querySelector(".img5");
    const name5 = document.querySelector(".name5");
    const email5 = document.querySelector(".email5");
    const card5 = document.querySelector(".card5");
    const hidden5 = document.querySelector(".hidden5");

    const img6 = document.querySelector(".img6");
    const name6 = document.querySelector(".name6");
    const email6 = document.querySelector(".email6");
    const card6 = document.querySelector(".card6");
    const hidden6 = document.querySelector(".hidden6");

    const img7 = document.querySelector(".img7");
    const name7 = document.querySelector(".name7");
    const email7 = document.querySelector(".email7");
    const card7 = document.querySelector(".card7");
    const hidden7 = document.querySelector(".hidden7");

    const img8 = document.querySelector(".img8");
    const name8 = document.querySelector(".name8");
    const email8 = document.querySelector(".email8");
    const card8 = document.querySelector(".card8");
    const hidden8 = document.querySelector(".hidden8");

    // Functions for displaying more information about employees
    firstEvent = (par1, par2) => {
        par1.addEventListener("mouseover", function(){
        par2.style.display = "block";
        par1.style.display = "none";
        })
    }

    secondEvent = (par1, par2) => {
        par2.addEventListener("mouseout", function(){
            par2.style.display = "none";
            par1.style.display = "block";
        })
    }

    // adding new employees
    let ma1 = new TeamMember(
        "ma1.jpg", 
        "Jeff", 
        "Bezos", 
        "bezos@insurance_cf.at", 
        "<p><b>Position: Founder and Owner</b></p><p><b>Age: 56</b></p><br><p>Jeffrey „Jeff“ Preston Bezos (* 12. Januar 1964 in Albuquerque, New Mexico als Jeffrey Preston Jorgensen) ist ein US-amerikanischer Unternehmer und Investor. Er ist Gründer des Onlineversandhändlers Amazon und fungiert als dessen President, Chairman und CEO. </p>"
        );
    ma1.show(img1, name1, email1, hidden1);
    firstEvent(card1, hidden1);
    secondEvent(card1, hidden1);
   
    let ma2 = new TeamMember(
        "ma2.jpg", 
        "Michael", 
        "Jordan", 
        "jordan@insurance_cf.at", 
        "<p><b>Position: CEO</b></p><p><b>Age: 57</b></p><br><p>Michael Jeffrey Jordan (born February 17, 1963), also known by his initials MJ, is an American former professional basketball player and the principal owner of the Charlotte Hornets of the National Basketball Association (NBA). He played 15 seasons in the NBA, winning six championships with the Chicago Bulls</p>"
        );
    ma2.show(img2, name2, email2, hidden2);
    firstEvent(card2, hidden2);
    secondEvent(card2, hidden2);

    let ma3 = new TeamMember(
        "ma3.jpg", 
        "Mila", 
        "Kunis", 
        "kunis@insurance_cf.at", 
        "<p><b>Position: CTO</b></p><p><b>Age: 36</b></p><br><p>Milena Markovna Mila Kunis (Ukrainian: Мілена Марківна Куніс; Russian: Милена Марковна Кунис; born August 14, 1983) is an American actress. In 1991, at the age of 7, she moved from Soviet Ukraine to the United States with her family.</p>"
        );
    ma3.show(img3, name3, email3, hidden3);
    firstEvent(card3, hidden3);
    secondEvent(card3, hidden3);

    let ma4 = new TeamMember(
        "ma4.jpg", 
        "Elon", 
        "Musk", 
        "musk@insurance_cf.at", 
        "<p><b>Position: Freelancer</b></p><p><b>Age: 48</b></p><br><p>Elon Reeve Musk FRS (born June 28, 1971) is an engineer, industrial designer and technology entrepreneur. He is a citizen of South Africa, Canada, and the United States. He is the founder, CEO and chief engineer/designer of SpaceX; early investor, CEO and product architect of Tesla, Inc.</p>"
        );
    ma4.show(img4, name4, email4, hidden4);
    firstEvent(card4, hidden4);
    secondEvent(card4, hidden4);

    let ma5 = new TeamMember(
        "ma5.jpg", 
        "Judith", 
        "Williams", 
        "williams@insurance_cf.at", 
        "<p><b>Position: Staff</b></p><p><b>Age: 48</b></p><br><p>Judith Alexis Stecher-Williams (* 18. September 1971 in München-Perlach) ist eine in Deutschland geborene US-Amerikanerin,die als Unternehmerin, Fernsehmoderatorin und Opernsängerin bekannt ist. </p>"
        );
    ma5.show(img5, name5, email5, hidden5);
    firstEvent(card5, hidden5);
    secondEvent(card5, hidden5);

    let ma6 = new TeamMember(
        "ma6.jpg", 
        "Oprah", 
        "Winfrey", 
        "winfrey@insurance_cf.at", 
        "<p><b>Position: Staff</b></p><p><b>Age: 66</b></p><br><p>JOprah Gail Winfrey (born Orpah Gail Winfrey; January 29, 1954) is an American media executive, actress, talk show host, television producer, and philanthropist. She is best known for her talk show, The Oprah Winfrey Show </p>");
    ma6.show(img6, name6, email6, hidden6);
    firstEvent(card6, hidden6);
    secondEvent(card6, hidden6);

    let ma7 = new TeamMember(
        "ma7.jpg", 
        "Mark", 
        "Zuckerberg", 
        "zuckerberg@insurance_cf.at", 
        "<p><b>Position: Staff</b></p><p><b>Age: 36</b></p><br><p>Mark Elliot Zuckerberg (born May 14, 1984) is an American internet entrepreneur and philanthropist. He is known for co-founding Facebook, Inc. and serves as its chairman, chief executive officer, and controlling shareholder.He also is a co-founder of the solar sail spacecraft development project Breakthrough Starshot and serves as one of its board members. </p>"
        );
    ma7.show(img7, name7, email7, hidden7);
    firstEvent(card7, hidden7);
    secondEvent(card7, hidden7);

    let ma8 = new TeamMember(
        "ma8.jpg", 
        "Warren", 
        "Buffet", 
        "buffet@insurance_cf.at", 
        "<p><b>Position: CFO</b></p><p><b>Age: 89</b></p><br><p>Warren Edward Buffett (born August 30, 1930) is an American investor, business tycoon, and philanthropist, who is the chairman and CEO of Berkshire Hathaway. He is considered one of the most successful investors in the world and has a net worth of US$88.9 billion as of December 2019, making him the fourth-wealthiest person in the world.</p>"
        );
    ma8.show(img8, name8, email8, hidden8);
    firstEvent(card8, hidden8);
    secondEvent(card8, hidden8);

});

