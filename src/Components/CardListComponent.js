import React from 'react';

import Card from './CardComponent';
import EmptyCard from './EmptyCardComponent';


class CardList extends React.Component {
  constructor(props) {
    
    super(props);
    // console.log(this.props);
    this.state = {
      posts: this.props.posts,
      article_id: '',
      view:false
    }
  }
 
  // const cardComponent = 
  cardClick = (event) => {
   
    this.setState({
      article_id: event.target.id,
      view:true
    });
    
     // eslint-disable-next-line no-unused-expressions
   
    console.log(event.target.id)
  }
  render() {
    // $fil
    // if(this.state.view === true){
    //   const filteredArticle = this.state.posts.filter(articles => {
    //     return articles.id.toLowerCase().includes(this.state.article_id)
    //   });
    //   console.log(filteredArticle);
    //   return <ViewPost article={filteredArticle}/>
    // }else{
      return (
        <div className="row">
          {this.props.posts.length === 0 ? <EmptyCard /> :
            this.props.posts.map((article, i) => {
              return (
                <Card
                  key={this.props.posts[i].id}
                  id={this.props.posts[i].id}
                  title={this.props.posts[i].title}
                  excerpt={this.props.posts[i].article.substr(0, 50)}
                  cover={this.props.posts[i].cover_image.length > 0 ? this.props.posts[i].cover_image : "avatar.png"}
                  slugs={this.props.posts[i].slug}
                  category={this.props.posts[i].categories.category}
                  category_id={this.props.posts[i].category_id}
                  views={this.props.posts[i].view_count}
                  author={this.props.posts[i].users != null ? this.props.posts[i].users.first_name : 'Skole'}
                  onclick={this.cardClick}
                />
              );
            })
          }
        </div>
      );
    // }
    
  
   
  }
}


export default CardList;
