import random
import string

def generate_random_username(length=8):
    chars = string.ascii_lowercase + string.digits
    return ''.join(random.choice(chars) for _ in range(length))

def generate_random_password(length=8):
    chars = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(chars) for _ in range(length))

def split_fio(fio):

        first_name = fio.split(' ', 1)[1]
        last_name = fio.split(' ', 1)[0]
        return {
            'first_name': first_name,
            'last_name': last_name
        }