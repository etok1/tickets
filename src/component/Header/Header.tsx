import style from "./style.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <img
        src="https://s3-alpha-sig.figma.com/img/ea56/b37d/bbaa732efb703a4ae9bbe7019c81058d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fmoKDm6fVMrynoQWLvzgXl-1D~huvx9MuqAwX54JO8GfCQs8DMaqVe6d-HN~jGLMt4zjl-YnaMRKpZ8n4RGE8hN2xZo4VIaxhfl6RPKaoKlmgr5vW-zo9wxjDqCellD0G4adp64fOxUXY-Hy8647xRF9ximVkFbZlBk1yy3Rqwo4EcD0G9ugsTjFBYG5ZnX4lpoqtK1Eson52LchgZWMXZI45mzCfNlmS74PwHmoz~zjHFNGpCZnjxDuK6-lOK-wme5aXyQRMo5WN8D4Qoijen5rdbioJ0q2aVHXBLrU9jVB4RthVq4EMK3MB~nAeY4077EgQwVxO966IPllBRE3mA__"
        alt="logo"
        width={100}
        height={80}
      />
      <h1>Поиск авиабилетов</h1>
    </header>
  );
}
