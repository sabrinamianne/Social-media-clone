import React from 'react';
import New from './New';

var masterNewsList= [
  {
    title: 'Lorem Ipsum',
    img: 'person1.jpeg',
    feed: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
   },
   {
     title: 'Lorem Ipsum',
       img: 'person2.jpg',
     feed: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
      title: 'Lorem Ipsum',
        img: 'person3.jpg',
      feed: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
     },
     {
       title: 'Lorem Ipsum',
         img: 'person4.jpg',
       feed: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
      }
    ];

    function News(){
      return(
        <div>
        {masterNewsList.map((news, index) =>
          <New title={news.title}
            img={news.img}
            feed={news.feed}
            key={index}/>
        )}
        </div>
      );
    }

export default News;
