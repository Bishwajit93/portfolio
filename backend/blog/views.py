# Create your views here.
from rest_framework.viewsets import ModelViewSet
from .models import Post
from .serializers import PostSerializer

class PostViewSet(ModelViewSet):
    queryset = Post.objects.all() #fetch all posts
    serializer_class = PostSerializer