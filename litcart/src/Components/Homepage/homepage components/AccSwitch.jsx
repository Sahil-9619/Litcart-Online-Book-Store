import { useNavigate } from 'react-router-dom';

function AccSwitch() {
  const navigate = useNavigate();

  const handleAccountChange = (e) => {
    const value = e.target.value;

    if (value === 'Signup') {
      navigate('/signup');
    } else if (value === 'Login') {
      navigate('/login');
    }
  };

  return (
    <select
      name="Account"
      id="account"
      defaultValue=""
      onChange={handleAccountChange}
    >
      <option value="" disabled hidden>
        Accounts
      </option>
      <option className="text text-black" value="Signup">Sign up</option>
      <option className="text text-black" value="Login">Log in</option>
    </select>
  );
}

export default AccSwitch;
