<script>
  let src = "./img/logo.svg";
</script>

<style>
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1rem;
  }

  footer h3 {
    text-align: center;
  }

  footer img {
    position: relative;
    top: 8px;
    margin-left: 5px;
    margin-right: 0;
    max-height: 60px;
    width: 100px;
  }
</style>

<footer>
  <h3>
    &copy; 2020, All Rights Reserved &nbsp; Website by
    <a
      className="signature"
      href="https://solomonzelenko.com/"
      target="_blank"
      rel="noopener noreferrer">
      <img {src} alt="Solomon" class="logo" />
    </a>
  </h3>
</footer>
