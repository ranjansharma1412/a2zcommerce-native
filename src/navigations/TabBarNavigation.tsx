import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartList from "@screens/carts/cartList/CartList";
import Dashboard from "@screens/dashboard/Dashboard";
import Category from "@screens/product/category/Category";
import Profile from "@screens/profile/Profile";


const Tab = createBottomTabNavigator();

const TabBarNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" component={Dashboard} options={{ title: "Home" }} />
            <Tab.Screen name="Category" component={Category} />
            <Tab.Screen name="CartList" component={CartList} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default TabBarNavigation