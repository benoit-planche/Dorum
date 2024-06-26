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

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'topics/:id', component: TopicPostsComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'create-topic', component: CreateTopicComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'edit-topic/:id', component: EditTopicComponent },
  { path: 'edit-post/:id', component: EditPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            MatSlideToggleModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
