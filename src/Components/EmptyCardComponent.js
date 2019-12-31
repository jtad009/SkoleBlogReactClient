import React,{useContext} from 'react';
import {BlogContext} from '../Store/Store';
import { BallBeat } from 'react-pure-loaders';

const EmptyCard = () => {
    const {loading} = useContext(BlogContext);
    
    return (
        <div className="col-sm-12 mb-3 h-100">
         <div className="card ">
            
            <div className="card-body">
                <h4 className="text-muted text-center">{ loading ? <BallBeat color="#379392" loading /> : 
                'No Article Found, Check to see you have a network connection.'}</h4>
                
                
            </div>
            
        </div>
        </div>
    );
}

export default EmptyCard;
