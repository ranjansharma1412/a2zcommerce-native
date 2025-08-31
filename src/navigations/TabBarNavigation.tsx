import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartList from "@screens/carts/cartList/CartList";
import Dashboard from "@screens/dashboard/Dashboard";
import Category from "@screens/product/category/Category";
import Profile from "@screens/profile/Profile";
import { COLORS } from "@themes/colors";
import CartIcon from "../assets/common/CartIcon";
import CategoryIcon from "../assets/common/CategoryIcon";
import HomeIcon from "../assets/common/HomeIcon";
import ProfileIcon from "../assets/common/ProfileIcon";


const Tab = createBottomTabNavigator();

const TabBarNavigation = () => {
    const primaryColor = COLORS.PRIMARY_ORANGE_COLOR;
    const secondaryColor = COLORS.SECONDARY_ORANGE_COLOR;

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconComponent;
                if (route.name === 'Dashboard') {
                    iconComponent = <HomeIcon color={focused ? primaryColor : secondaryColor} />;
                } else if (route.name === 'Category') {
                    iconComponent = <CategoryIcon color={focused ? primaryColor : secondaryColor} />;
                } else if (route.name === 'CartList') {
                    iconComponent = <CartIcon color={focused ? primaryColor : secondaryColor} />;
                } else if (route.name === 'Profile') {
                    iconComponent = <ProfileIcon color={focused ? primaryColor : secondaryColor} />;
                }

                return iconComponent;
            },
            tabBarActiveTintColor: primaryColor,
            tabBarInactiveTintColor: secondaryColor,
        })}>
            <Tab.Screen name="Dashboard" component={Dashboard} options={{ title: "Home" }} />
            <Tab.Screen name="Category" component={Category} />
            <Tab.Screen name="CartList" component={CartList} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default TabBarNavigation