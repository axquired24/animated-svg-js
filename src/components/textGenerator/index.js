import { Component, createRef, h } from 'preact';
import {useEffect, useState} from "preact/hooks";
import style from './style.css';
import Albert from '../text/albert'
import anime from 'animejs/lib/anime.es.js';


class TextGenerator extends Component {
    svgPath = createRef()
    
	render() {
        useEffect(() => {
            anime({
                targets: this.svgPath.current,
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 4500,
                delay: function(el, i) { 
                    return i * 1250
                },
                endDelay: function(el, i) { 
                    return i * 1250
                },
                direction: 'alternate',
                loop: true
            })
        }, [])
        
        return <div class={style.home}>
            <div>
                <Albert pathRef={this.svgPath} />
            </div>
            <div>
                <h1>Text Generator S</h1>
                <p>This is the Home component.</p>
            </div>
        </div>
    }
}

export default TextGenerator;
