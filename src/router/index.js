import { createRouter, createWebHashHistory } from "vue-router";
import UserPage from "@/views/UserPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import PostsPage from "@/views/PostsPage.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: UserPage,
      children: [
        {
          path: "profile",
          component: ProfilePage,
        },
        {
          path: "posts",
          component: PostsPage,
        },
      ],
    },
  ],
});

export default router;
