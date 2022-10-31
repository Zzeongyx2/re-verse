package kr.co.reverse.auth.api.service;

import kr.co.reverse.auth.common.exception.IncorrectEmailOrPasswordException;
import kr.co.reverse.auth.db.entity.Auth;
import kr.co.reverse.auth.db.repository.AuthRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final AuthRepository authRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserDetails user =  authRepository.findByEmail(username)
                .map(this::createUserDetails)
//                .orElseThrow(() -> new IllegalArgumentException());
                .orElseThrow(() -> new UsernameNotFoundException("해당하는 유저를 찾을 수 없습니다."));

        return user;
    }

    private UserDetails createUserDetails(Auth auth){
        GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(auth.getAuthority().toString());
        return new User(auth.getEmail(), auth.getPassword(), Collections.singleton(grantedAuthority));
    }
}
