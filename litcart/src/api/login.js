import Cookies from 'js-cookie';

export const loginUser = async (formData) => {
    try{
        const res = await fetch("http://localhost:5000/api/users/login",{
            method: "POST", 
            headers:{
                "Content-Type":"application/json",
            },
            credentials: 'include',
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (res.ok) {
            Cookies.set('LitcartUserName', data.user.name, {expires: 7});
             Cookies.set('userId', data.user._id, { expires: 7 });
        }
        
        return{ success:res.ok, data};
    } catch (error){
        console.error("Login API Error:", error);
        return {success: false, data:{ message:"Server error"}};
    }

};