from django.views.generic import TemplateView
from django.contrib.auth import get_user_model

User = get_user_model()


# Create your views here.
# User Sign-in View
class LoginView(TemplateView):
    template_name = 'base/base.html'
    title = 'Login | OBAA.IO'
    component = 'authApp'
    component_render = 'bundles/authApp.js'  # Static render. No hot reload

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super(LoginView, self).get_context_data(**kwargs)
        context['title'] = self.title
        context['component'] = self.component
        context['component_render'] = self.component_render
        return context



class LoginView(RequestFormAttachMixin, FormView):
    form_class = LoginForm
    success_url = '/'
    template_name = "registration/login.html"

    def form_valid(self, form):
        request = self.request
        user = request.user
        print(user)
        msg = "Welcome back " + user.username.upper()
        messages.success(request, msg)
        return redirect(self.success_url)



# # User PROFILE page
# class UserProfileView(LoginRequiredMixin, DetailView):
#     template_name = "profile/user-profile.html"
#
#     # def get_context_data(self, **kwargs):
#     #     context = super(UserProfileView, self).get_context_data(**kwargs)
#     #     context['pgp_form'] = UserPgpChangeForm
#     #     return context
#
#     def get_object(self, queryset=None):
#         return self.request.user
#
#
# # User Sign-up View
# def signup(request):
#     if request.method == 'POST':
#         form = SignUpForm(request.POST)
#         if form.is_valid():
#             raw_password = form.cleaned_data.get('password1')
#             user_ = form.save()
#             user = authenticate(username=user_.username, password=raw_password)
#             login(request, user)
#
#             msg = "Hello " + user.username.upper() + ". Welcome to OnionShop."
#             messages.success(request, msg)
#             return redirect("product_list")
#     else:
#         form = SignUpForm()
#     return render(request, 'registration/signup.html', {'form': form})
#
#
# # User Sign-in View
# class LoginView(RequestFormAttachMixin, FormView):
#     form_class = LoginForm
#     success_url = '/'
#     template_name = "registration/login.html"
#
#     def form_valid(self, form):
#         request = self.request
#         user = request.user
#         print(user)
#         msg = "Welcome back " + user.username.upper()
#         messages.success(request, msg)
#         return redirect(self.success_url)
#
