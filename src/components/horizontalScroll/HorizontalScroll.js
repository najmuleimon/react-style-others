import React, { useEffect } from 'react'
import './scroll.css'
import horizontalScroller from './horizontalScroller';

const HorizontalScroll = () => {
  const stepValue = 300;
  const durationValue = 500;
  useEffect(() => {
    const scrollContainer = document.querySelector(".cat-section-elements");
    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      const scrollStep = evt.deltaY > 0 ? stepValue : -stepValue;
      const scrollValue = scrollContainer.scrollLeft + scrollStep;
      horizontalScroller(scrollContainer, scrollValue, durationValue); // Adjust the duration (500ms) to control the smoothness
    });
  }, []);

  const previousAndNextScrollHandeler = (btnType) => {
    const scrollContainer = document.querySelector(".cat-section-elements");
    const scrollStep = btnType === "next-btn" ? stepValue : -stepValue;
    const scrollValue = scrollContainer.scrollLeft + scrollStep;
    horizontalScroller(scrollContainer, scrollValue, durationValue); // Adjust the duration (500ms) to control the smoothness
  };

  return (
    <div class="main-wrapper">
    <button type="button" class="horizontalScrolerPrevBtn" onClick={() => previousAndNextScrollHandeler('prev-btn')}>
      prev
    </button>
    <div class="scrollable-btns cat-section-elements">
      <button type="button">button-1</button>
      <button type="button">button-2</button>
      <button type="button">button-3</button>
      <button type="button">button-4</button>
      <button type="button">button-5</button>
      <button type="button">button-6</button>
      <button type="button">button-7</button>
      <button type="button">button-8</button>
      <button type="button">button-9</button>
      <button type="button">button-10</button>
      <button type="button">button-11</button>
      <button type="button">button-12</button>
      <button type="button">button-13</button>
      <button type="button">button-14</button>
      <button type="button">button-15</button>
      <button type="button">button-16</button>
      <button type="button">button-17</button>
      <button type="button">button-18</button>
      <button type="button">button-19</button>
      <button type="button">button-20</button>
      <button type="button">button-21</button>
      <button type="button">button-22</button>
      <button type="button">button-23</button>
      <button type="button">button-24</button>
      <button type="button">button-25</button>
    </div>
    <button type="button" class="horizontalScrolerNextBtn" onClick={() => previousAndNextScrollHandeler('next-btn')}>
      next
    </button>
  </div>
  )
}

export default HorizontalScroll