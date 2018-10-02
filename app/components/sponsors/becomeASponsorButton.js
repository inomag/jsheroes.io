import Link from 'next/link';

const BecomeASponsorButton = () => (
  <div className="button-wrapper">
    <Style />
    <Link className="button" href="/become-a-sponsor">
      Become a Sponsor
    </Link>
  </div>
);

const Style = () => (
  <style jsx>
    {`
      .button-wrapper {
        text-align: center;
        margin-top: 80px;
      }
      .button {
        width: 240px;
        padding: 10px 20px;
        background-color: #fff;
        color: #0098ff;
        border: 1px solid #0098ff;
        transition: all 0.5s;
        margin: auto;
        border-radius: 4px;
        font-size: 18px;
        font-weight: 500;
      }
      .button:hover,
      .button:focus {
        color: #fff;
        background-color: #0098ff;
      }
    `}
  </style>
);

export default BecomeASponsorButton;
