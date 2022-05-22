import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Coin = () => {
  const [heads, setHeads] = React.useState<boolean>(false);
  const [tails, setTails] = React.useState<boolean>(false);
  const [result, setResult] = React.useState<boolean>(false);
  const [flipBtn, setFlipBtn] = React.useState<boolean>(false);
  const [coinStyle, setCoinStyle] = React.useState<any>('coin');
  const [betAmount, setBetAmount] = React.useState<any>({
    egld005: false,
    elgd010: false
  });
  const [betCoin, setBetCoin] = React.useState<any>({
    head: false,
    tail: false
  });
  const [errors, setErrors] = React.useState<any>('');
  const [show, setShow] = React.useState(false);
  const [isSubmiting, setIsSubmitting] = React.useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCoinFlip = (e: React.MouseEvent) => {
    e.preventDefault();
    if (betAmount.egld005 || betAmount.egld010) {
      if (betCoin.head || betCoin.tail) {
        setHeads(false);
        setTails(false);
        setResult(false);
        setErrors('');
        setFlipBtn(true);
        const i = Math.floor(Math.random() * 2);
        if (i) {
          setTimeout(function () {
            setCoinStyle('coin animation-heads');
          }, 100);
          setHeads(true);
        } else {
          setTimeout(function () {
            setCoinStyle('coin animation-tails');
          }, 100);
          setTails(true);
        }
        setCoinStyle('coin');
        setTimeout(disableButtons, 3100);
        setIsSubmitting(true);
        setTimeout(handleShow, 3200);
      } else {
        setErrors('Plese select HEAD or TAIL');
      }
    } else {
      setErrors('Plese select bet amount');
    }
  };

  const disableButtons = () => {
    setFlipBtn(false);
    setBetAmount({ egld005: false, egld010: false });
    setBetCoin({
      head: false,
      tail: false
    });
  };

  const handleSumButton = (e: any) => {
    e.preventDefault();
    if (e.target.id === '005') {
      setBetAmount({
        egld005: true,
        egld010: false
      });
    }
    if (e.target.id === '010') {
      setBetAmount({
        egld005: false,
        egld010: true
      });
    }
  };

  const handleCoinButton = (e: any) => {
    e.preventDefault();
    if (e.target.id === 'head') {
      setBetCoin({
        head: true,
        tail: false
      });
    }
    if (e.target.id === 'tail') {
      setBetCoin({
        head: false,
        tail: true
      });
    }
  };

  React.useEffect(() => {
    if (isSubmiting && !errors) {
      if (betCoin.head && heads) {
        setResult(true);
      }
      if (betCoin.tail && tails) {
        setResult(true);
      }
      setIsSubmitting(false);
    }
  }, [tails, heads, isSubmiting]);

  return (
    <div className='container1'>
      <div className='alignCenter'>
        <p className='coinText'>Bet amount</p>
      </div>
      <div className='betSum'>
        <button
          id='005'
          className={betAmount.egld005 ? 'active-button' : ''}
          onClick={handleSumButton}
          disabled={flipBtn}
        >
          0.05 EGLD
        </button>
        <button
          onClick={handleSumButton}
          id='010'
          className={betAmount.egld010 ? 'active-button' : ''}
          disabled={flipBtn}
        >
          0.10 EGLD
        </button>
      </div>
      <div className='alignCenter'>
        <p className='coinText'> on</p>
      </div>
      <div className='betCoin'>
        <button
          onClick={handleCoinButton}
          className={betCoin.head ? 'active-button' : ''}
          disabled={flipBtn}
          id='head'
        >
          Head
        </button>
        <button
          onClick={handleCoinButton}
          className={betCoin.tail ? 'active-button' : ''}
          disabled={flipBtn}
          id='tail'
        >
          Tail
        </button>
      </div>
      <p className='coinText'></p>
      <div className='buttons'>
        <button id='flip-button' onClick={handleCoinFlip} disabled={flipBtn}>
          Flip Coin
        </button>
      </div>
      {errors && <p className='errors'>{errors}</p>}
      <div className={coinStyle}>
        <div className='heads'>
          <img src='heads.svg' />
        </div>
        <div className='tails'>
          <img src='tails.svg' />
        </div>
      </div>
      <div className='alignCenter'>
        <p className='coinText'>Good luck</p>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size='sm'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header>
          <Modal.Title>
            <p>{result ? 'Woohoo, You WON 🥳' : 'YOU LOOSE ☹️'}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for participating</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Coin;
