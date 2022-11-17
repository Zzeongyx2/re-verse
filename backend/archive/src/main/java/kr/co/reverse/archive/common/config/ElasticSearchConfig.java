package kr.co.reverse.archive.common.config;

import kr.co.reverse.archive.db.repository.UserSearchRepository;
import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.elasticsearch.client.ClientConfiguration;
import org.springframework.data.elasticsearch.client.RestClients;
import org.springframework.data.elasticsearch.config.AbstractElasticsearchConfiguration;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories;


@Configuration
@EnableElasticsearchRepositories(basePackageClasses = UserSearchRepository.class)
public class ElasticSearchConfig extends AbstractElasticsearchConfiguration {

    @Value("${elasticsearch.port}")
    private String elasticPort;

    @Value("${elasticsearch.host}")
    private String elasticHost;

    @Override
    @Bean
    public RestHighLevelClient elasticsearchClient() {

        System.out.println("======= elastic search port : " + elasticPort);
        System.out.println("------- elastic search host : " + elasticHost);

        ClientConfiguration clientConfiguration = ClientConfiguration.builder()
                .connectedTo(elasticHost + ":" + elasticPort)
                .build();
        return RestClients.create((clientConfiguration)).rest();
    }

    @Bean
    public ElasticsearchOperations elasticsearchOperations(){
        return new ElasticsearchRestTemplate(elasticsearchClient());
    }
}
