from django.contrib import messages
from django.contrib.auth import authenticate, get_user_model, login
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import UpdateView, ListView, DetailView, FormView
from orders.models import OrderItem, Order
from django.shortcuts import render, get_object_or_404, redirect

from .forms import SignUpForm, LoginForm, UserPgpChangeForm
from dark_web.mixins import RequestFormAttachMixin


# Create your views here.


# User ORDER details page
class UserOrderDetailView(LoginRequiredMixin, DetailView):
    template_name = 'orders/order-detail.html'

    def get_object(self, queryset=None):
        order_id = self.kwargs.get("order_id")
        orders = OrderItem.objects.filter(order_id=order_id, author=self.request.user)
        return orders.first()


# User ORDER(s) page
class UserOrdersListView(LoginRequiredMixin, ListView):
    template_name = 'orders/order-list.html'

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)


# User PROFILE update page
class UserPgpUpdateView(LoginRequiredMixin, FormView):
    form_class = UserPgpChangeForm
    template_name = "profile/update-pgp.html"

    def get_context_data(self, **kwargs):
        context = super(UserPgpUpdateView, self).get_context_data(**kwargs)
        context['pgp_form'] = UserPgpChangeForm
        return context

    # def get_object(self, queryset=None):
    #     return self.request.user

    def form_valid(self, form):
        print("Valid")
        request = self.request
        user = self.request.user
        print(request.user)
        print(form.cleaned_data)
        pgp_key = form.cleaned_data.get('pgp_key')
        user.pgp_key = pgp_key
        user.save()
        print("Confirm")
        print(user.pgp_key)
        msg = "PGP Key updated successfully"
        messages.success(request, msg)
        return redirect("user_profile")

    def form_invalid(self, form):
        print("Invalid")
        request = self.request
        msg = "Form invalid"
        messages.success(request, msg)
        return redirect("user_profile")


# User PROFILE page
class UserProfileView(LoginRequiredMixin, DetailView):
    template_name = "profile/user-profile.html"

    # def get_context_data(self, **kwargs):
    #     context = super(UserProfileView, self).get_context_data(**kwargs)
    #     context['pgp_form'] = UserPgpChangeForm
    #     return context

    def get_object(self, queryset=None):
        return self.request.user


# User Sign-up View
def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            raw_password = form.cleaned_data.get('password1')
            user_ = form.save()
            user = authenticate(username=user_.username, password=raw_password)
            login(request, user)

            msg = "Hello " + user.username.upper() + ". Welcome to OnionShop."
            messages.success(request, msg)
            return redirect("product_list")
    else:
        form = SignUpForm()
    return render(request, 'registration/signup.html', {'form': form})


# User Sign-in View
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

