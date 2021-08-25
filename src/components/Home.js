import React from 'react';

const Home = () => {
  const homeContainer = {
    margin: '3em',
    padding: '2em',
  };

  const paragraph = {
    margin: '3rem 0',
  };

  return (
    <div style={homeContainer}>
      <h2 style={{ fontSize: '2rem' }}>Welcome to our page!</h2>
      <p style={paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus elementum justo velit. Proin dui arcu, feugiat eget
        tellus vel, porta dapibus purus. Nam pulvinar metus sem,
        a ultricies ante volutpat ac. Donec ac massa ac metus lacinia
        molestie eget non erat. Curabitur ac turpis ut ex rutrum scelerisque.
        Proin tempus velit in magna aliquet fringilla.
        Aliquam mollis varius magna at placerat. Etiam laoreet luctus dui
        pharetra placerat.
        Sed sed neque mauris. Maecenas lorem nisi, pharetra in metus vel,
        tincidunt sagittis tellus.
        In et tempor risus. Nunc molestie tellus at sem accumsan,
        in vulputate tortor blandit.
        Sed non consectetur leo. Phasellus cursus consequat semper.
        Nunc feugiat consequat facilisis.
        Donec tempus vestibulum nisi, a blandit velit auctor nec.
      </p>
      <p style={paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus elementum justo velit. Proin dui arcu, feugiat eget
        tellus vel, porta dapibus purus. Nam pulvinar metus sem,
        a ultricies ante volutpat ac. Donec ac massa ac metus lacinia
        molestie eget non erat. Curabitur ac turpis ut ex rutrum scelerisque.
        Proin tempus velit in magna aliquet fringilla.
        Aliquam mollis varius magna at placerat. Etiam laoreet luctus dui
        pharetra placerat.
        Sed sed neque mauris. Maecenas lorem nisi, pharetra in metus vel,
        tincidunt sagittis tellus.
        In et tempor risus. Nunc molestie tellus at sem accumsan,
        in vulputate tortor blandit.
        Sed non consectetur leo. Phasellus cursus consequat semper.
        Nunc feugiat consequat facilisis.
        Donec tempus vestibulum nisi, a blandit velit auctor nec.
      </p>
    </div>
  );
};

export default Home;
