import React from 'react';
import pythonImage from '../../assets/image.png'; // Import the image file

const Python = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1 style={{ fontSize: '32px' , marginTop:"10px"}}>Python</h1>
      <img src={pythonImage} alt="Python Logo" style={{ width: '600px', height: '900px', objectFit: 'contain' }} />
      <div style={{ width: '600px' , }}>
      <h1 style={{ fontSize: '32px', padding:"5px" }}>Python List Exercises</h1>
      <ul style={{listStyleType:'disc'}}>
        <li>Python program to interchange first and last elements in a list</li>
        <li>Python program to interchange first and last elements in a list</li>
        <li>Python program to swap two elements in a list</li>
        <li>Python | Ways to find length of list</li>
        <li>Maximum of two numbers in Python</li>
        <li>Minimum of two numbers in Python</li>
      </ul></div>

      <div style={{ width: '600px' , }}>
      <h1 style={{ fontSize: '32px', padding:"5px" }}>Python String Exercises</h1>
      <ul style={{listStyleType:'disc'}}>
        <li>Python program to check whether the string is Symmetrical or Palindrome</li>
        <li>Reverse words in a given String in Python</li>
        <li>Ways to remove i’th character from string in Python</li>
        <li>Find length of a string in python (4 ways)</li>
        <li>Python program to print even length words in a string</li>
      </ul></div>

      <div style={{ width: '600px' }}>
     
      <h1 style={{ fontSize: '32px', padding:"5px" }}>Python Tuple Exercises</h1>
      <ul style={{listStyleType:'disc'}}>
        <li>Python program to Find the size of a Tuple</li>
        <li>Python – Maximum and Minimum K elements in Tuple</li>
        <li>Python – Sum of tuple elements</li>
        <li>Python – Row-wise element Addition in Tuple Matrix</li>
        <li>Create a list of tuples from given list having number and its cube in each tuple</li>
      </ul></div>


      <div style={{ width: '600px' }}>
      <h1 style={{ fontSize: '32px', padding:"5px" }}>List of Resources</h1>
      <ul style={{listStyleType:'disc'}}>
        <li><a href="https://www.geeksforgeeks.org/python-exercises-practice-questions-and-solutions/">"https://www.geeksforgeeks.org/python-exercises-practice-questions-and-solutions/"</a></li>
        <li><a href="https://www.geeksforgeeks.org/number-guessing-game-in-python/">https://www.geeksforgeeks.org/number-guessing-game-in-python/</a></li>
        <li><a href="https://roadmap.sh/pdfs/roadmaps/python.pdf">https://roadmap.sh/pdfs/roadmaps/python.pdf</a></li>
        <li><a href="link_to_resource_4">Resource 4</a></li>
        {/* Add more list items with hyperlinks as needed */}
      </ul>
    </div>

    </div>
  );
};

export default Python;
