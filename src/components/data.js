const data = [
    {
      title: "GROUP A",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      title: "GROUP B",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "GROUP C",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
  ];
  
  const GroupsList = () => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "csrftoken=jmsQLbzxHJFW9b3clnHucst1Xyw2xi4VTAnMZbW5EMzKP3imwnoXTWLAkofL4Sjg");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://omshukla.pythonanywhere.com/dashboard/group/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
};

  export default data;