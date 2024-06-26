import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TopicsComponent } from './topics/topics.component';
import { TopicPostsComponent } from './topic-posts/topic-posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditTopicComponent } from './edit-topic/edit-topic.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'topics', component: TopicsComponent, canActivate: [AuthGuard] },
  { path: 'topics/:id', component: TopicPostsComponent, canActivate: [AuthGuard] },
  { path: 'post/:id', component: PostDetailComponent, canActivate: [AuthGuard] },
  { path: 'create-topic', component: CreateTopicComponent, canActivate: [AuthGuard] },
  { path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'edit-topic/:id', component: EditTopicComponent, canActivate: [AuthGuard] },
  { path: 'edit-post/:id', component: EditPostComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            MatSlideToggleModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
