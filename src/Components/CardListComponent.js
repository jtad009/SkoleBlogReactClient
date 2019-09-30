import React from 'react';

import Card from './CardComponent';
import EmptyCard from './EmptyCardComponent';
import {BlogContext} from '../Store/Store';

class CardList extends React.Component {
   static contextType = BlogContext;
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
          {this.props.posts.length === 0 || this.context.loading ? <EmptyCard text=""/> :
            this.props.posts.map((article, i) => {
              return (
                <Card
                  key={this.props.posts[i].id}
                  id={this.props.posts[i].id}
                  title={this.props.posts[i].title}
                  excerpt={this.props.posts[i].ExtractExcerpt}
                  cover={this.props.posts[i].cover_image.length > 0 ? 'http://skole.com.ng/webroot/img/passport/blogs/' + this.props.posts[i].cover_image : 'https://skole.com.ng/webroot/img/slide/bg-post.jpg'}
                  slugs={this.props.posts[i].slug}
                  category={this.props.posts[i].category.category}
                  category_id={this.props.posts[i].category_id}
                  views={this.props.posts[i].view_count}
                  author={this.props.posts[i].user != null ? this.props.posts[i].user.username : 'Skole'}
                  onclick={this.cardClick}
                  created={this.props.posts[i].created}
                  readTime={this.props.posts[i].readTime}
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
