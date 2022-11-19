//package kr.co.reverse.archive.common.config;
//
//import com.amazonaws.auth.AWS4Signer;
//import kr.co.reverse.archive.db.repository.UserSearchRepository;
//import org.apache.http.HttpHost;
//import org.apache.http.HttpRequestInterceptor;
//import org.apache.http.auth.AuthScope;
//import org.apache.http.auth.UsernamePasswordCredentials;
//import org.apache.http.client.CredentialsProvider;
//import org.apache.http.impl.client.BasicCredentialsProvider;
//import org.elasticsearch.client.RestClient;
//import org.elasticsearch.client.RestClientBuilder;
//import org.elasticsearch.client.RestHighLevelClient;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.elasticsearch.client.ClientConfiguration;
//import org.springframework.data.elasticsearch.client.RestClients;
//import org.springframework.data.elasticsearch.client.elc.ElasticsearchTemplate;
//import org.springframework.data.elasticsearch.config.AbstractElasticsearchConfiguration;
//import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
//import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
//import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories;
//
//import java.net.UnknownHostException;
//
//
//@Configuration
//@EnableElasticsearchRepositories(basePackageClasses = UserSearchRepository.class)
//public class ElasticSearchConfig extends AbstractElasticsearchConfiguration {
//
////    @Value("${elasticsearch.port}")
////    private String elasticPort;
//
//    @Value("${elasticsearch.endpoint}")
//    private String elasticHost;
//
//    @Value("${elasticsearch.username}")
//    private String elasticUser;
//
//    @Value("${elasticsearch.password}")
//    private String elasticPW;
//
//    @Value("${elasticsearch.port}")
//    private String elasticPort;
//
//    @Value("${elasticsearch.region}")
//    private String elasticRegion;
//
//    @Value("${elasticsearch.servicename}")
//    private String elasticService;
//
//    @Override
//    @Bean
//    public RestHighLevelClient elasticsearchClient() {
//
//        ClientConfiguration clientConfiguration = ClientConfiguration.builder()
//                .connectedTo(elasticHost+":"+elasticPort)
//                .build();
//        return RestClients.create((clientConfiguration)).rest();
//    }
//
//    @Bean
//    public ElasticsearchOperations elasticsearchOperations(){
//        return new ElasticsearchRestTemplate(elasticsearchClient());
//    }
//}
